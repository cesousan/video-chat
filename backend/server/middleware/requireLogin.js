const passport = require('passport')

module.exports = (req, res, next) => {
  return passport.authenticate(
    ['jwt'],
    { session: false },
    (err, user, info) => {
      console.log(err, user, info);
      if (err) {
        console.log(err);
        return next(err);
      }
      if (!user) {
        return res.json({
          status: 'error',
          error: 'ANOTHORIZED_USER'
        });
      }
      // Forward user information to the next middleware
      req.user = user;
      next();
    }
  )(req, res, next);
}
