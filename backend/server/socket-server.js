
const WebSocket = require('ws');
const keys = require('./config/keys');
const { verifyAccessToken } = require('./services/token');


module.exports = server => {


  const pathChat = '/api/chat';

  const verifyClient = async (info, done) => {

    const headers = info.req.headers;
    if(!keys.allowedClientOrigins.includes(headers.origin)) return done(false, 401, 'Unauthorized');

    // TESTING PURPOSES ONLY !!!
    // TODO: comment the line below or refresh the token manually after authenticating
    headers.authorization = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzA1MjQwMzYsImV4cCI6MTUzMDUyNzYzNiwic3ViIjoiNWIyYjc4NjI3ZTYxOGMyYTUxYTBkZWViIn0.J5cEykInuUo7E1yWkxG12qOxstn2VNXcBUhfabU3eIs';
    // *********************** //

    if(!headers.authorization) {
      return done(false, 401, 'Unauthorized');
    }
    // returns a user or false
    const verified = await verifyAccessToken(headers.authorization);
    // adding verified status / object to the request object.
    info.req.verified = verified;
    console.log('verified :', info.req.verified);


    return verified
      ? done(verified, 200)
      : done(false, 401, 'Invalid credentials');
  };

  // server.on('request', app);

  // initialize the websocket server instance
  const wss = new WebSocket.Server({ server, pathChat, verifyClient });

  wss.on('connection', (ws, request) => {
    console.log('about to launch websocket connection configuration');
    require('./services/ws/websocket')(ws, request);
  });

  return server;
}
