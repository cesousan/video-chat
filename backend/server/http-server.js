module.exports = app => {

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
}
