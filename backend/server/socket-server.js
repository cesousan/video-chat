const http = require('http');
const WebSocket = require('ws');
const keys = require('./config/keys');
const { verifyAccessToken } = require('./services/token');

module.exports = app => {
  console.log('about to create the web socket server...');
  // initialize simple http server
  const server = http.createServer();
  const path = '/api/chat';

  const verifyClient = async (info, done) => {
    const headers = info.req.headers;
    if(!keys.allowedClientOrigins.includes(headers.origin)) return done(false, 401, 'Unauthorized');

    // TESTING PURPOSES ONLY !!!
    // comment the line below or refresh the token manually after authenticating
    // headers.authorization = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzAyNjA2ODAsImV4cCI6MTUzMDI2NDI4MCwic3ViIjoiNWIyYjZkMzRmNmY4OTUxNWVjODFlMWI2In0.kQ4vvFwDszqh-TBiVLspNwC1laTbv8Q7cfUHAlddFuA';
    // *********************** //

    if(!headers.authorization) {
      return done(false, 401, 'Unauthorized');
    }
    // returns a user or false
    const verified = await verifyAccessToken(headers.authorization);
    return verified
      ? done(verified, 200)
      : done(false, 401, 'Invalid credentials');
  }

  server.on('request', app);

  // initialize the websocket server instance
  const wss = new WebSocket.Server({ server, path, verifyClient });

  wss.on('connection', (websocket) => {
    console.log('connection');
    websocket.on('message', (message) => {
      console.log(`received : ${message}`);
      websocket.send(`Hey! you sent : ${message}`);
    });
  });


  // start wss server
  // const PORT = process.env.PORT || 5000;
  // server.listen(
  //   PORT,
  //   () => console.log(`Server started on port ${server.address().port}`)
  // );

  return server;
}
