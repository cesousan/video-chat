const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = app => {

  // HTTPS OPTIONS
  const certOptions = {
    key: fs.readFileSync(path.resolve('certificates/server.key')),
    cert: fs.readFileSync(path.resolve('certificates/server.crt'))
  }

  // routes to Authentication
  require('./routes/auth-routes')(app);

  // routes to protected API.
  require('./routes/protected-routes')(app);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    next();
  });
  // initialize HTTP server.
  const HTTP = http.createServer(app);

  // initialize HTTPS server.
  const HTTPS = https.createServer(certOptions, app);

  return {
    HTTP,
    HTTPS
  };

}
