const passport = require('passport');
const { generateAccessToken } = require('../services/token');

const generateUserToken = async (req, res) => {
  const accessToken = await generateAccessToken(req.user.id);
  const origin = req.query && req.query.state
    ? req.query.state
    : req.headers.referer
      ? req.headers.referer
      : false;
  if (!origin) {
    res.send('the authentication failed, please retry.');
  }

  res.redirect(`${origin}/?access_token=${accessToken}`);
}

module.exports = app => {
  // GOOGLE AUTH ROUTES
  // get the google-OAuth2 flow kicked.
  app.get('/auth/google', function (req, res) {
    passport.authenticate('google', {
      session: false,
      scope: ['profile', 'email'],
      state: req.headers.referer
    })(req, res);
  });
  // get the callback from google.
  app.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    generateUserToken
  );
  // ********************
  // FACEBOOK AUTH routes
  // get the facebook-OAuth2 flow kicked.
  app.get('/auth/facebook', function (req, res) {
    passport.authenticate('facebook', {
      session: false,
      scope: ['user_friends', 'email', 'public_profile'],
      state: req.headers.referer
    })(req, res);
  });
  // get the callback from facebook.
  app.get('/auth/facebook/callback',
      passport.authenticate('facebook', { session: false }),
      generateUserToken
    );
  // ********************

};
