
const WebSocket = require('ws');
const keys = require('./config/keys');
const { verifyAccessToken } = require('./services/token');


module.exports = server => {


  const pathChat = '/api/chat';

  const verifyClient = async (info, done) => {

    // function to get the queryParam in url.
    let _getParameterByName = (name, url) => {
      if (!url) url = window.location.href;
      name = name.replace(/[[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    // check if origin is authorized.
    const headers = info.req.headers;
    if(!keys.allowedClientOrigins.includes(headers.origin)){
      return done(false, 401, 'Unauthorized');
    }
    // extract token if present or reject.
    const token = _getParameterByName('access_token', info.req.url);
    if(!token) {
      return done(false, 401, 'Unauthorized');
    }
    // verify access token is valid
    // returns a user or false
    const verified = await verifyAccessToken(token, false);
    // adding verified status / object to the request object.
    info.req.verified = verified;

    return verified
      ? done(verified, 200)
      : done(false, 401, 'Invalid credentials');
  };
  // initialize the websocket server instance
  const wss = new WebSocket.Server({ server, pathChat, verifyClient });

  wss.on('connection', (ws, request) => {
    require('./services/ws/websocket')(ws, request);
  });

  return server;
}
