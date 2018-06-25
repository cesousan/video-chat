const requireLogin = require('../middleware/requireLogin');
const usersRouter = require('./api/users');
module.exports = app => {

  app.get('/api',
    (req, res) => {
      res.send(`
        <h1>Welcome to the AwasomeVideoChat API!</h1>
        <h2>See <a href="#">our documentation</a> for more information
        on how to use it</h2>
      `);
    });

  app.use('/api/*',
    requireLogin);

  app.use('/api/users', usersRouter);

};
