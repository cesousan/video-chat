const passport = require('passport')

module.exports = (req, res, next) => {
  return passport.authenticate(
    ['jwt'],
    { session: false },
    (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({
          status: 'error',
          error: 'UNAUTHORIZED_USER'
        });
      }
      // Forward user information to the next middleware
      req.user = user;
      next();
    }
  )(req, res, next);
}
