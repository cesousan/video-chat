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
eval("\n\nconst express = __webpack_require__(/*! express */ \"express\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst passport = __webpack_require__(/*! passport */ \"passport\");\nconst token = __webpack_require__(/*! ./server/services/token */ \"./server/services/token.js\");\nconst keys = __webpack_require__(/*! ./server/config/keys */ \"./server/config/keys.js\");\n\n__webpack_require__(/*! ./server/models/User */ \"./server/models/User.js\");\n__webpack_require__(/*! ./server/services/passport */ \"./server/services/passport.js\");\n\nmongoose.connect(keys.mongoURI);\n\nconst app = express();\n\napp.use(passport.initialize());\n\n__webpack_require__(/*! ./server/routes/auth-routes */ \"./server/routes/auth-routes.js\")(app);\n\nconst PORT = process.env.PORT || 5000;\napp.listen(PORT);\nconsole.log('app listening on port', PORT);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server/config/dev.js":
/*!******************************!*\
  !*** ./server/config/dev.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst dbUser = 'videochat_admin';\nconst dbPwd = 'th1s1sav1deochatdb';\n\nmodule.exports = {\n  googleClientID: '159196855743-1sriggald1d4n1jpalqfvb1j1t6bf7em.apps.googleusercontent.com',\n  googleClientSecret: '14lH6_A2MLv-jrUjiAnfX5sH',\n  facebookClientID: '186305602070094',\n  facebookClientSecret: '735b92376ea1b920677ad9718e7ce07b',\n  tokenSecret: 'mySuperSecretTokenKey',\n  mongoURI: `mongodb://${dbUser}:${dbPwd}@ds263640.mlab.com:63640/video_chat-dev`\n};\n\n//# sourceURL=webpack:///./server/config/dev.js?");

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
eval("\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst { Schema } = mongoose;\n\nconst userSchema = new Schema({\n  googleId: String,\n  facebookId: String,\n  name: String,\n  email: String,\n  avatar: String\n});\n\nmongoose.model('users', userSchema);\n\n//# sourceURL=webpack:///./server/models/User.js?");

/***/ }),

/***/ "./server/routes/auth-routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth-routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst passport = __webpack_require__(/*! passport */ \"passport\");\nconst token = __webpack_require__(/*! ../services/token */ \"./server/services/token.js\");\n\nconst generateUserToken = (req, res) => {\n  const accessToken = token.generateAccessToken(req.user.id);\n  res.send({ token: accessToken });\n};\n\nmodule.exports = app => {\n\n  // GOOGLE AUTH ROUTES\n  // get the google-OAuth2 flow kicked.\n  app.get('/auth/google', passport.authenticate('google', {\n    session: false,\n    scope: ['profile', 'email']\n  }));\n  // get the callback from google.\n  app.get('/auth/google/callback', passport.authenticate('google', { session: false }), generateUserToken);\n  // ********************\n  // FACEBOOK AUTH routes\n  // get the facebook-OAuth2 flow kicked.\n  app.get('/auth/facebook', passport.authenticate('facebook', {\n    session: false,\n    scope: ['user_friends', 'email', 'public_profile']\n  }));\n  // get the callback from facebook.\n  app.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), generateUserToken);\n  // ********************\n\n  app.get('/api/secure', passport.authenticate(['jwt'], { session: false }), (req, res) => {\n    console.log(req);\n    res.send('Secure response from ' + JSON.stringify(req.user));\n  });\n\n  // // LOGOUT ROUTE\n  // app.get('/api/logout', (req, res) => {\n  //   req.logout();\n  //   res.send(req.user);\n  // });\n  //\n  // // CONNECTED USER ? NO WAY BECAUSE STATELESS...\n  // app.get('/api/current_user', (req, res) => res.send(req.user));\n};\n\n//# sourceURL=webpack:///./server/routes/auth-routes.js?");

/***/ }),

/***/ "./server/services/passport.js":
/*!*************************************!*\
  !*** ./server/services/passport.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst passport = __webpack_require__(/*! passport */ \"passport\");\nconst passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\nconst GoogleStrategy = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\").Strategy;\nconst FacebookStrategy = __webpack_require__(/*! passport-facebook */ \"passport-facebook\").Strategy;\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst keys = __webpack_require__(/*! ../config/keys */ \"./server/config/keys.js\");\n\nconst User = mongoose.model('users');\n\nif (keys.googleClientID) {\n  // google strategy\n  passport.use(new GoogleStrategy({\n    clientID: keys.googleClientID,\n    clientSecret: keys.googleClientSecret,\n    callbackURL: '/auth/google/callback',\n    proxy: true\n  }, async (accessToken, refreshToken, profile, done) => {\n    const existingUser = await _getBySocialID(profile);\n    if (existingUser) {\n      done(null, existingUser);\n    } else {\n      // checks if a user is already stored in database with this email\n      // i.e. if a user has another social account linked with same email.\n      const user = await _getByEmail(profile);\n      // if user exists, add a new field to the document\n      // else create new user document.\n      const USER = user ? await User.findByIdAndUpdate(user.id, { $set: { googleId: profile.id } }) : await _createUser(profile, 'googleId');\n      done(null, USER);\n    }\n  }));\n}\n\nif (keys.facebookClientID) {\n  // facebook strategy\n  passport.use(new FacebookStrategy({\n    clientID: keys.facebookClientID,\n    clientSecret: keys.facebookClientSecret,\n    callbackURL: '/auth/facebook/callback',\n    profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'gender'],\n    proxy: true\n  }, async (accessToken, refreshToken, profile, done) => {\n    const existingUser = await _getBySocialID(profile);\n    if (existingUser) {\n      done(null, existingUser);\n    } else {\n      // checks if a user is already stored in database with this email\n      // i.e. if a user has another social account linked with same email.\n      const user = await _getByEmail(profile);\n      // if user exists, add a new field to the document\n      // else create new user document.\n      const USER = user ? await User.findByIdAndUpdate(user.id, { $set: { facebookId: profile.id } }) : await _createUser(profile, 'facebookId');\n      done(null, USER);\n    }\n  }));\n}\n\n// jwt Strategy\npassport.use(new passportJwt.Strategy({\n  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: keys.tokenSecret\n}, async (payload, done) => {\n  console.log(payload);\n  const user = await User.findById(payload.userId);\n  return user ? done(null, user, payload) : done();\n}));\n\n/** finds a user by its social id (facebook, google, etc.);\n* performs multiple concurrent checks into database\n* @return the first matching user profile, or null.\n*/\nconst _getBySocialID = async profile => {\n  const existingFacebookUser = User.findOne({ facebookId: profile.id });\n  const existingGoogleUser = User.findOne({ googleId: profile.id });\n  // add any new social id below...\n\n  const users = await Promise.all([existingFacebookUser, existingGoogleUser]);\n\n  return users ? users.filter(a => a !== null)[0] : null;\n};\n\n/** checks if a database entry exists for a given profile list of email.\n* @return the first matching user profile, or null.\n*/\nconst _getByEmail = profile => {\n  /** inner async function to perform multiple concurrent checks\n  * on emails in the database.\n  * @return the first matching element or null.\n  */\n  const checkMailExist = async emails => {\n    console.log('checking mails for adresses : ', emails);\n    let emailPromises = [];\n    emails.forEach(email => {\n      const user = User.findOne({ email });\n      emailPromises.push(user);\n    });\n    const users = await Promise.all(emailPromises);\n    return users ? users.filter(a => a !== null)[0] : null;\n  };\n  return profile.emails ? checkMailExist(profile.emails.map(mail => mail.value)) : null;\n};\n\nconst _createUser = (profile, socialID = '') => {\n  let user = new User({ name: profile.displayName });\n  if (socialID) {\n    user[socialID] = profile.id;\n    // add as many cases as the app handles...\n    switch (profile.provider) {\n      case 'facebook':\n      case 'google':\n        {\n          user.email = profile.emails[0].value;\n          break;\n        }\n      default:\n        {\n          break;\n        }\n    }\n  }\n  return user.save();\n};\n\n//# sourceURL=webpack:///./server/services/passport.js?");

/***/ }),

/***/ "./server/services/token.js":
/*!**********************************!*\
  !*** ./server/services/token.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst keys = __webpack_require__(/*! ../config/keys */ \"./server/config/keys.js\");\n\nconst generateAccessToken = (userID, expiresIn = 3600) => {\n  const secret = keys.tokenSecret;\n  const token = jwt.sign({}, secret, {\n    expiresIn,\n    subject: userID.toString()\n  });\n  return token;\n};\n\nmodule.exports = {\n  generateAccessToken\n};\n\n//# sourceURL=webpack:///./server/services/token.js?");

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