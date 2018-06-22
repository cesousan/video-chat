const passport = require('passport');
const token = require('../services/token');

const generateUserToken = (req, res) => {
  const accessToken = token.generateAccessToken(req.user.id);
  res.send({ token: accessToken });
}

module.exports = (app) => {


  // GOOGLE AUTH ROUTES
  // get the google-OAuth2 flow kicked.
  app.get('/auth/google',
    passport.authenticate('google', {
      session: false,
      scope: ['profile', 'email']
    })
  );
  // get the callback from google.
  app.get('/auth/google/callback',
      passport.authenticate('google', { session: false }),
      generateUserToken
    );
  // ********************
  // FACEBOOK AUTH routes
  // get the facebook-OAuth2 flow kicked.
  app.get('/auth/facebook',
    passport.authenticate('facebook', {
      session: false,
      scope: ['user_friends', 'email', 'public_profile']
    })
  );
  // get the callback from facebook.
  app.get('/auth/facebook/callback',
      passport.authenticate('facebook', { session: false }),
      generateUserToken
    );
  // ********************

  app.get('/api/secure',
    passport.authenticate(['jwt'], { session: false }),
    (req, res) => {
      console.log(req);
      res.send('Secure response from ' + JSON.stringify(req.user));
    });

  // // LOGOUT ROUTE
  // app.get('/api/logout', (req, res) => {
  //   req.logout();
  //   res.send(req.user);
  // });
  //
  // // CONNECTED USER ? NO WAY BECAUSE STATELESS...
  // app.get('/api/current_user', (req, res) => res.send(req.user));

};
