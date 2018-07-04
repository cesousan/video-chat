const passport = require('passport');
const { generateAccessToken } = require('../services/token');

const generateUserToken = (req, res) => {
  const accessToken = generateAccessToken(req.user.id);
  res
    // .status(200)
    // .query('access_token', accessToken)
    .redirect(`${(req.headers.referer).slice()}?access_token=${accessToken}`);
}

module.exports = app => {

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

};
