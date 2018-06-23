/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar token = __webpack_require__(/*! ./server/services/token */ \"./server/services/token.js\");\nvar keys = __webpack_require__(/*! ./server/config/keys */ \"./server/config/keys.js\");\n\n__webpack_require__(/*! ./server/models/User */ \"./server/models/User.js\");\n__webpack_require__(/*! ./server/services/passport */ \"./server/services/passport.js\");\n\nmongoose.connect(keys.mongoURI);\n\nvar app = express();\n\napp.use(passport.initialize());\n\n__webpack_require__(/*! ./server/routes/auth-routes */ \"./server/routes/auth-routes.js\")(app);\n\nvar PORT = process.env.PORT || 5000;\napp.listen(PORT);\nconsole.log('app listening on port', PORT);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server/config/dev.js":
/*!******************************!*\
  !*** ./server/config/dev.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dbUser = 'videochat_admin';\nvar dbPwd = 'th1s1sav1deochatdb';\n\nmodule.exports = {\n  googleClientID: '159196855743-1sriggald1d4n1jpalqfvb1j1t6bf7em.apps.googleusercontent.com',\n  googleClientSecret: '14lH6_A2MLv-jrUjiAnfX5sH',\n  facebookClientID: '186305602070094',\n  facebookClientSecret: '735b92376ea1b920677ad9718e7ce07b',\n  tokenSecret: 'mySuperSecretTokenKey',\n  mongoURI: 'mongodb://' + dbUser + ':' + dbPwd + '@ds263640.mlab.com:63640/video_chat-dev'\n};\n\n//# sourceURL=webpack:///./server/config/dev.js?");

/***/ }),

/***/ "./server/config/keys.js":
/*!*******************************!*\
  !*** ./server/config/keys.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nswitch (\"development\") {\n  case 'production':\n    {\n      module.exports = __webpack_require__(/*! ./prod */ \"./server/config/prod.js\");\n      break;\n    }\n  // case 'preprod' : {\n  //   module.exports = require('./pre-prod');\n  //   break;\n  // }\n  default:\n    {\n      module.exports = __webpack_require__(/*! ./dev */ \"./server/config/dev.js\");\n    }\n}\n\n//# sourceURL=webpack:///./server/config/keys.js?");

/***/ }),

/***/ "./server/config/prod.js":
/*!*******************************!*\
  !*** ./server/config/prod.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//# sourceURL=webpack:///./server/config/prod.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\n\n\nvar userSchema = new Schema({\n  googleId: String,\n  facebookId: String,\n  name: String,\n  email: String,\n  avatar: String\n});\n\nmongoose.model('users', userSchema);\n\n//# sourceURL=webpack:///./server/models/User.js?");

/***/ }),

/***/ "./server/routes/auth-routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth-routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar token = __webpack_require__(/*! ../services/token */ \"./server/services/token.js\");\n\nvar generateUserToken = function generateUserToken(req, res) {\n  var accessToken = token.generateAccessToken(req.user.id);\n  res.send({ token: accessToken });\n};\n\nmodule.exports = function (app) {\n\n  // GOOGLE AUTH ROUTES\n  // get the google-OAuth2 flow kicked.\n  app.get('/auth/google', passport.authenticate('google', {\n    session: false,\n    scope: ['profile', 'email']\n  }));\n  // get the callback from google.\n  app.get('/auth/google/callback', passport.authenticate('google', { session: false }), generateUserToken);\n  // ********************\n  // FACEBOOK AUTH routes\n  // get the facebook-OAuth2 flow kicked.\n  app.get('/auth/facebook', passport.authenticate('facebook', {\n    session: false,\n    scope: ['user_friends', 'email', 'public_profile']\n  }));\n  // get the callback from facebook.\n  app.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), generateUserToken);\n  // ********************\n\n  app.get('/api/secure', passport.authenticate(['jwt'], { session: false }), function (req, res) {\n    console.log(req);\n    res.send('Secure response from ' + JSON.stringify(req.user));\n  });\n\n  // // LOGOUT ROUTE\n  // app.get('/api/logout', (req, res) => {\n  //   req.logout();\n  //   res.send(req.user);\n  // });\n  //\n  // // CONNECTED USER ? NO WAY BECAUSE STATELESS...\n  // app.get('/api/current_user', (req, res) => res.send(req.user));\n};\n\n//# sourceURL=webpack:///./server/routes/auth-routes.js?");

/***/ }),

/***/ "./server/services/passport.js":
/*!*************************************!*\
  !*** ./server/services/passport.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\nvar GoogleStrategy = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\").Strategy;\nvar FacebookStrategy = __webpack_require__(/*! passport-facebook */ \"passport-facebook\").Strategy;\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar keys = __webpack_require__(/*! ../config/keys */ \"./server/config/keys.js\");\n\nvar User = mongoose.model('users');\n\nif (keys.googleClientID) {\n  // google strategy\n  passport.use(new GoogleStrategy({\n    clientID: keys.googleClientID,\n    clientSecret: keys.googleClientSecret,\n    callbackURL: '/auth/google/callback',\n    proxy: true\n  }, function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, done) {\n      var existingUser, user, USER;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _getBySocialID(profile);\n\n            case 2:\n              existingUser = _context.sent;\n\n              if (!existingUser) {\n                _context.next = 7;\n                break;\n              }\n\n              done(null, existingUser);\n              _context.next = 21;\n              break;\n\n            case 7:\n              _context.next = 9;\n              return _getByEmail(profile);\n\n            case 9:\n              user = _context.sent;\n\n              if (!user) {\n                _context.next = 16;\n                break;\n              }\n\n              _context.next = 13;\n              return User.findByIdAndUpdate(user.id, { $set: { googleId: profile.id } });\n\n            case 13:\n              _context.t0 = _context.sent;\n              _context.next = 19;\n              break;\n\n            case 16:\n              _context.next = 18;\n              return _createUser(profile, 'googleId');\n\n            case 18:\n              _context.t0 = _context.sent;\n\n            case 19:\n              USER = _context.t0;\n\n              done(null, USER);\n\n            case 21:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3, _x4) {\n      return _ref.apply(this, arguments);\n    };\n  }()));\n}\n\nif (keys.facebookClientID) {\n  // facebook strategy\n  passport.use(new FacebookStrategy({\n    clientID: keys.facebookClientID,\n    clientSecret: keys.facebookClientSecret,\n    callbackURL: '/auth/facebook/callback',\n    profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'gender'],\n    proxy: true\n  }, function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(accessToken, refreshToken, profile, done) {\n      var existingUser, user, USER;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _getBySocialID(profile);\n\n            case 2:\n              existingUser = _context2.sent;\n\n              if (!existingUser) {\n                _context2.next = 7;\n                break;\n              }\n\n              done(null, existingUser);\n              _context2.next = 21;\n              break;\n\n            case 7:\n              _context2.next = 9;\n              return _getByEmail(profile);\n\n            case 9:\n              user = _context2.sent;\n\n              if (!user) {\n                _context2.next = 16;\n                break;\n              }\n\n              _context2.next = 13;\n              return User.findByIdAndUpdate(user.id, { $set: { facebookId: profile.id } });\n\n            case 13:\n              _context2.t0 = _context2.sent;\n              _context2.next = 19;\n              break;\n\n            case 16:\n              _context2.next = 18;\n              return _createUser(profile, 'facebookId');\n\n            case 18:\n              _context2.t0 = _context2.sent;\n\n            case 19:\n              USER = _context2.t0;\n\n              done(null, USER);\n\n            case 21:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x5, _x6, _x7, _x8) {\n      return _ref2.apply(this, arguments);\n    };\n  }()));\n}\n\n// jwt Strategy\npassport.use(new passportJwt.Strategy({\n  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: keys.tokenSecret\n}, function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(payload, done) {\n    var user;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            console.log(payload);\n            _context3.next = 3;\n            return User.findById(payload.userId);\n\n          case 3:\n            user = _context3.sent;\n            return _context3.abrupt('return', user ? done(null, user, payload) : done());\n\n          case 5:\n          case 'end':\n            return _context3.stop();\n        }\n      }\n    }, _callee3, undefined);\n  }));\n\n  return function (_x9, _x10) {\n    return _ref3.apply(this, arguments);\n  };\n}()));\n\n/** finds a user by its social id (facebook, google, etc.);\n* performs multiple concurrent checks into database\n* @return the first matching user profile, or null.\n*/\nvar _getBySocialID = function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(profile) {\n    var existingFacebookUser, existingGoogleUser, users;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            existingFacebookUser = User.findOne({ facebookId: profile.id });\n            existingGoogleUser = User.findOne({ googleId: profile.id });\n            // add any new social id below...\n\n            _context4.next = 4;\n            return Promise.all([existingFacebookUser, existingGoogleUser]);\n\n          case 4:\n            users = _context4.sent;\n            return _context4.abrupt('return', users ? users.filter(function (a) {\n              return a !== null;\n            })[0] : null);\n\n          case 6:\n          case 'end':\n            return _context4.stop();\n        }\n      }\n    }, _callee4, undefined);\n  }));\n\n  return function _getBySocialID(_x11) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/** checks if a database entry exists for a given profile list of email.\n* @return the first matching user profile, or null.\n*/\nvar _getByEmail = function _getByEmail(profile) {\n  /** inner async function to perform multiple concurrent checks\n  * on emails in the database.\n  * @return the first matching element or null.\n  */\n  var checkMailExist = function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(emails) {\n      var emailPromises, users;\n      return regeneratorRuntime.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              console.log('checking mails for adresses : ', emails);\n              emailPromises = [];\n\n              emails.forEach(function (email) {\n                var user = User.findOne({ email: email });\n                emailPromises.push(user);\n              });\n              _context5.next = 5;\n              return Promise.all(emailPromises);\n\n            case 5:\n              users = _context5.sent;\n              return _context5.abrupt('return', users ? users.filter(function (a) {\n                return a !== null;\n              })[0] : null);\n\n            case 7:\n            case 'end':\n              return _context5.stop();\n          }\n        }\n      }, _callee5, undefined);\n    }));\n\n    return function checkMailExist(_x12) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n  return profile.emails ? checkMailExist(profile.emails.map(function (mail) {\n    return mail.value;\n  })) : null;\n};\n\nvar _createUser = function _createUser(profile) {\n  var socialID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  var user = new User({ name: profile.displayName });\n  if (socialID) {\n    user[socialID] = profile.id;\n    // add as many cases as the app handles...\n    switch (profile.provider) {\n      case 'facebook':\n      case 'google':\n        {\n          user.email = profile.emails[0].value;\n          break;\n        }\n      default:\n        {\n          break;\n        }\n    }\n  }\n  return user.save();\n};\n\n//# sourceURL=webpack:///./server/services/passport.js?");

/***/ }),

/***/ "./server/services/token.js":
/*!**********************************!*\
  !*** ./server/services/token.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar keys = __webpack_require__(/*! ../config/keys */ \"./server/config/keys.js\");\n\nvar generateAccessToken = function generateAccessToken(userID) {\n  var expiresIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3600;\n\n  var secret = keys.tokenSecret;\n  var token = jwt.sign({}, secret, {\n    expiresIn: expiresIn,\n    subject: userID.toString()\n  });\n  return token;\n};\n\nmodule.exports = {\n  generateAccessToken: generateAccessToken\n};\n\n//# sourceURL=webpack:///./server/services/token.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-facebook":
/*!************************************!*\
  !*** external "passport-facebook" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-facebook\");\n\n//# sourceURL=webpack:///external_%22passport-facebook%22?");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-google-oauth20\");\n\n//# sourceURL=webpack:///external_%22passport-google-oauth20%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ })

/******/ });