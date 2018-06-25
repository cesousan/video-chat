const passport = require('passport');
const passportJwt = require('passport-jwt');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

if (keys.googleClientID) {
  // google strategy
  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await _getBySocialID(profile);
      if (existingUser) {
        done(null, existingUser);
      } else {
        // checks if a user is already stored in database with this email
        // i.e. if a user has another social account linked with same email.
        const user = await _getByEmail(profile);
        // if user exists, add a new field to the document
        // else create new user document.
        const USER =  user
          ? await User.findByIdAndUpdate(user.id, {$set: {googleId: profile.id}} )
          : await _createUser(profile, 'googleId');
        done(null, USER);
      }
    })
  );
}

if (keys.facebookClientID) {
  // facebook strategy
  passport.use(
    new FacebookStrategy({
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'gender'],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await _getBySocialID(profile);
      if (existingUser) {
        done(null, existingUser);
      } else {
        // checks if a user is already stored in database with this email
        // i.e. if a user has another social account linked with same email.
        const user = await _getByEmail(profile);
        // if user exists, add a new field to the document
        // else create new user document.
        const USER =  user
          ? await User.findByIdAndUpdate(user.id, {$set: {facebookId: profile.id}} )
          : await _createUser(profile, 'facebookId');
        done(null, USER);
      }
    })
  );
}

// jwt Strategy
passport.use(
  new passportJwt.Strategy({
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.tokenSecret,
    // more options : issuer, audience, etc.
  },
  async (payload, done) => {
    console.log(payload.sub)
    const user = await User.findById(payload.sub);
    return user ? done(null, user, payload) : done();
  })
);

/** finds a user by its social id (facebook, google, etc.);
* performs multiple concurrent checks into database
* @return the first matching user profile, or null.
*/
const _getBySocialID = async (profile) => {
  const existingFacebookUser = User.findOne({ facebookId: profile.id });
  const existingGoogleUser = User.findOne({ googleId: profile.id });
  // add any new social id below...

  const users = await Promise.all([existingFacebookUser, existingGoogleUser]);

  return users ? users.filter(a => a !== null)[0] : null;
}

/** checks if a database entry exists for a given profile list of email.
* @return the first matching user profile, or null.
*/
const _getByEmail = (profile) => {
  /** inner async function to perform multiple concurrent checks
  * on emails in the database.
  * @return the first matching element or null.
  */
  const checkMailExist = async (emails) => {
    let emailPromises = [];
    emails.forEach(email => {
      const user = User.findOne({ email });
      emailPromises.push(user);
    });
    const users = await Promise.all(emailPromises);
    return users ? users.filter(a => a !== null)[0] : null;
  }
  return profile.emails
  ? checkMailExist(profile.emails.map(mail => mail.value))
  : null;
}

const _createUser = (profile, socialID = '') => {
  let user = new User({ name : profile.displayName });
  if (socialID) {
    user[socialID] = profile.id;
    // add as many cases as the app handles...
    switch (profile.provider) {
      case 'facebook' :
      case 'google' : {
        user.email = profile.emails[0].value;
        break;
      }
      default : {
        break;
      }
    }
  }
  return user.save();
}
