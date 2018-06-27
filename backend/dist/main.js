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
eval("\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n// mongoose models.\n__webpack_require__(/*! ./server/models/User */ \"./server/models/User.js\");\n\nconst token = __webpack_require__(/*! ./server/services/token */ \"./server/services/token.js\");\nconst keys = __webpack_require__(/*! ./server/config/keys */ \"./server/config/keys.js\");\n\n// custom services.\n__webpack_require__(/*! ./server/services/passport */ \"./server/services/passport.js\");\n__webpack_require__(/*! ./server/services/cache */ \"./server/services/cache.js\");\n\n// mongoose make use of global promises.\nmongoose.Promise = global.Promise;\n// connection to db\nmongoose.connect(keys.mongoURI);\n\n// creates http server.\nconst app = __webpack_require__(/*! ./server/http-server */ \"./server/http-server.js\");\n\n// creates the websocket server.\nconst server = __webpack_require__(/*! ./server/socket-server */ \"./server/socket-server.js\")(app);\n\nconst PORT = process.env.PORT || 5000;\nserver.listen(PORT, () => console.log(`listening on port ${PORT}`));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server/config/dev.js":
/*!******************************!*\
  !*** ./server/config/dev.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst dbUser = 'videochat_admin';\nconst dbPwd = 'th1s1sav1deochatdb';\n\nmodule.exports = {\n  googleClientID: '159196855743-1sriggald1d4n1jpalqfvb1j1t6bf7em.apps.googleusercontent.com',\n  googleClientSecret: '14lH6_A2MLv-jrUjiAnfX5sH',\n  facebookClientID: '186305602070094',\n  facebookClientSecret: '735b92376ea1b920677ad9718e7ce07b',\n  tokenSecret: 'mySuperSecretTokenKey',\n  mongoURI: `mongodb://${dbUser}:${dbPwd}@ds263640.mlab.com:63640/video_chat-dev`,\n  redisUrl: 'redis://127.0.0.1:6379',\n  allowedClientOrigins: ['localhost:4200', 'chrome-extension://omalebghpgejjiaoknljcfmglgbpocdp']\n};\n\n//# sourceURL=webpack:///./server/config/dev.js?");

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

/***/ "./server/http-server.js":
/*!*******************************!*\
  !*** ./server/http-server.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst express = __webpack_require__(/*! express */ \"express\");\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst passport = __webpack_require__(/*! passport */ \"passport\");\n\nconst app = express();\n\napp.use(bodyParser.json());\n\napp.use(passport.initialize());\n\n__webpack_require__(/*! ./routes/auth-routes */ \"./server/routes/auth-routes.js\")(app);\n\n__webpack_require__(/*! ./routes/protected-routes */ \"./server/routes/protected-routes.js\")(app);\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./server/http-server.js?");

/***/ }),

/***/ "./server/middleware/requireLogin.js":
/*!*******************************************!*\
  !*** ./server/middleware/requireLogin.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst passport = __webpack_require__(/*! passport */ \"passport\");\n\nmodule.exports = (req, res, next) => {\n  return passport.authenticate(['jwt'], { session: false }, (err, user, info) => {\n    if (err) {\n      console.log(err);\n      return next(err);\n    }\n    if (!user) {\n      return res.json({\n        status: 'error',\n        error: 'ANOTHORIZED_USER'\n      });\n    }\n    // Forward user information to the next middleware\n    req.user = user;\n    next();\n  })(req, res, next);\n};\n\n//# sourceURL=webpack:///./server/middleware/requireLogin.js?");

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

/***/ "./server/routes/api/users.js":
/*!************************************!*\
  !*** ./server/routes/api/users.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst users = __webpack_require__(/*! express */ \"express\").Router();\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst User = mongoose.model('users');\n\n/**\n* @summary find all users in database.\n* @return { Array<User> } all users in the database.\n*/\nusers.get('/', async (req, res, next) => {\n  res.send((await User.find()));\n});\n\n/**\n* @summary find a specific user in database by its mongoose id,\n* and cache the result.\n* @param { string } userId the mongoose id of the user.\n*/\nusers.get('/:userId', async (req, res, next) => {\n  res.send((await User.findById(req.params.userId).cache({\n    key: req.params.userId\n  })));\n});\n\nmodule.exports = users;\n\n//# sourceURL=webpack:///./server/routes/api/users.js?");

/***/ }),

/***/ "./server/routes/auth-routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth-routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst passport = __webpack_require__(/*! passport */ \"passport\");\nconst token = __webpack_require__(/*! ../services/token */ \"./server/services/token.js\");\n\nconst generateUserToken = (req, res) => {\n  const accessToken = token.generateAccessToken(req.user.id);\n  res.send({ access_token: accessToken });\n};\n\nmodule.exports = app => {\n\n  // GOOGLE AUTH ROUTES\n  // get the google-OAuth2 flow kicked.\n  app.get('/auth/google', passport.authenticate('google', {\n    session: false,\n    scope: ['profile', 'email']\n  }));\n  // get the callback from google.\n  app.get('/auth/google/callback', passport.authenticate('google', { session: false }), generateUserToken);\n  // ********************\n  // FACEBOOK AUTH routes\n  // get the facebook-OAuth2 flow kicked.\n  app.get('/auth/facebook', passport.authenticate('facebook', {\n    session: false,\n    scope: ['user_friends', 'email', 'public_profile']\n  }));\n  // get the callback from facebook.\n  app.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), generateUserToken);\n  // ********************\n};\n\n//# sourceURL=webpack:///./server/routes/auth-routes.js?");

/***/ }),

/***/ "./server/routes/protected-routes.js":
/*!*******************************************!*\
  !*** ./server/routes/protected-routes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst requireLogin = __webpack_require__(/*! ../middleware/requireLogin */ \"./server/middleware/requireLogin.js\");\nconst usersRouter = __webpack_require__(/*! ./api/users */ \"./server/routes/api/users.js\");\n\nmodule.exports = app => {\n\n  app.get('/api', (req, res) => {\n    res.send(`\n        <h1>Welcome to the AwasomeVideoChat API!</h1>\n        <h2>See <a href=\"#\">our documentation</a> for more information\n        on how to use it</h2>\n      `);\n  });\n\n  app.use('/api/*', requireLogin);\n\n  app.use('/api/users', usersRouter);\n};\n\n//# sourceURL=webpack:///./server/routes/protected-routes.js?");

/***/ }),

/***/ "./server/services/cache.js":
/*!**********************************!*\
  !*** ./server/services/cache.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst redis = __webpack_require__(/*! redis */ \"redis\");\nconst keys = __webpack_require__(/*! ../config/keys */ \"./server/config/keys.js\");\nconst util = __webpack_require__(/*! util */ \"util\");\n\nconst client = redis.createClient(keys.redisUrl);\nclient.hget = util.promisify(client.hget);\n\nconst exec = mongoose.Query.prototype.exec;\n\n// adding a cache function to the mongoose prototype.\nmongoose.Query.prototype.cache = function (options = {}) {\n  this.useCache = true;\n  this.hashKey = JSON.stringify(options.key || '');\n  return this;\n};\n\n// redefining exec to handle new cache.\nmongoose.Query.prototype.exec = async function () {\n  if (!this.useCache) {\n    return exec.apply(this, arguments);\n  }\n\n  const key = JSON.stringify(Object.assign({}, this.getQuery(), {\n    collection: this.mongooseCollection.name\n  }));\n\n  // See if we have a value for 'key' in redis\n  const cacheValue = await client.hget(this.hashKey, key);\n\n  // If we do, return that\n  if (cacheValue) {\n    const doc = JSON.parse(cacheValue);\n\n    return Array.isArray(doc) ? doc.map(d => new this.model(d)) : new this.model(doc);\n  }\n\n  // Otherwise, issue the query and store the result in redis\n  const result = await exec.apply(this, arguments);\n\n  client.hset(this.hashKey, key, JSON.stringify(result), 'EX', 10);\n  return result;\n};\n\nmodule.exports = {\n  clearHash(hashKey) {\n    client.del(JSON.stringify(hashKey));\n  }\n};\n\n//# sourceURL=webpack:///./server/services/cache.js?");

/***/ }),

/***/ "./server/services/passport.js":
/*!*************************************!*\
  !*** ./server/services/passport.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst passport = __webpack_require__(/*! passport */ \"passport\");\nconst passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\nconst GoogleStrategy = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\").Strategy;\nconst FacebookStrategy = __webpack_require__(/*! passport-facebook */ \"passport-facebook\").Strategy;\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst keys = __webpack_require__(/*! ../config/keys */ \"./server/config/keys.js\");\n\nconst User = mongoose.model('users');\n\nif (keys.googleClientID) {\n  // google strategy\n  passport.use(new GoogleStrategy({\n    clientID: keys.googleClientID,\n    clientSecret: keys.googleClientSecret,\n    callbackURL: '/auth/google/callback',\n    proxy: true\n  }, async (accessToken, refreshToken, profile, done) => {\n    const existingUser = await _getBySocialID(profile);\n    if (existingUser) {\n      done(null, existingUser);\n    } else {\n      // checks if a user is already stored in database with this email\n      // i.e. if a user has another social account linked with same email.\n      const user = await _getByEmail(profile);\n      // if user exists, add a new field to the document\n      // else create new user document.\n      const USER = user ? await User.findByIdAndUpdate(user.id, { $set: { googleId: profile.id } }) : await _createUser(profile, 'googleId');\n      done(null, USER);\n    }\n  }));\n}\n\nif (keys.facebookClientID) {\n  // facebook strategy\n  passport.use(new FacebookStrategy({\n    clientID: keys.facebookClientID,\n    clientSecret: keys.facebookClientSecret,\n    callbackURL: '/auth/facebook/callback',\n    profileFields: ['id', 'displayName', 'email', 'birthday', 'friends', 'gender'],\n    proxy: true\n  }, async (accessToken, refreshToken, profile, done) => {\n    const existingUser = await _getBySocialID(profile);\n    if (existingUser) {\n      done(null, existingUser);\n    } else {\n      // checks if a user is already stored in database with this email\n      // i.e. if a user has another social account linked with same email.\n      const user = await _getByEmail(profile);\n      // if user exists, add a new field to the document\n      // else create new user document.\n      const USER = user ? await User.findByIdAndUpdate(user.id, { $set: { facebookId: profile.id } }) : await _createUser(profile, 'facebookId');\n      done(null, USER);\n    }\n  }));\n}\n\n// jwt Strategy\npassport.use(new passportJwt.Strategy({\n  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: keys.tokenSecret\n  // more options : issuer, audience, etc.\n}, async (payload, done) => {\n  const user = await User.findById(payload.sub);\n  return user ? done(null, user, payload) : done();\n}));\n\n/**\n* @summary finds a user by its social id (facebook, google, etc.);\n* performs multiple concurrent checks into database\n* @param { object } profile the social profile returned by the social strategy used.\n* @return { User } the first matching user profile, or null.\n*/\nconst _getBySocialID = async profile => {\n  const existingFacebookUser = User.findOne({ facebookId: profile.id });\n  const existingGoogleUser = User.findOne({ googleId: profile.id });\n  // add any new social id below...\n\n  const users = await Promise.all([existingFacebookUser, existingGoogleUser]);\n\n  return users ? users.filter(a => a !== null)[0] : null;\n};\n\n/**\n* @summary checks if a database entry exists for a given profile list of email.\n* @param { object } profile the social profile returned by the social strategy used.\n* @return { User } the first matching user profile, or null.\n*/\nconst _getByEmail = profile => {\n  /**\n  * inner async function to perform multiple concurrent checks\n  * on emails in the database.\n  * @param { Array<String> } emails the list of mails contained in the social profile.\n  * @return the first matching element or null.\n  */\n  const checkMailExist = async emails => {\n    let emailPromises = [];\n    emails.forEach(email => {\n      const user = User.findOne({ email });\n      emailPromises.push(user);\n    });\n    const users = await Promise.all(emailPromises);\n    return users ? users.filter(a => a !== null)[0] : null;\n  };\n  return profile.emails ? checkMailExist(profile.emails.map(mail => mail.value)) : null;\n};\n/**\n* @summary a function to create a new user from the infos contained inside\n* his social profile when first authenticating.\n* @function\n* @param { object } profile the social profile returned by the social strategy used.\n* @param { string } socialID the socialID of the profile, to manage multiple accounts with\n* same user (ex : facebook + google authentication sharing same emails).\n* @return { User } the user saved.\n*/\nconst _createUser = (profile, socialID = '') => {\n  let user = new User({ name: profile.displayName });\n  if (socialID) {\n    user[socialID] = profile.id;\n    // add as many cases as the app handles...\n    switch (profile.provider) {\n      case 'facebook':\n      case 'google':\n        {\n          user.email = profile.emails[0].value;\n          break;\n        }\n      default:\n        {\n          break;\n        }\n    }\n  }\n  return user.save();\n};\n\n//# sourceURL=webpack:///./server/services/passport.js?");

/***/ }),

/***/ "./server/services/token.js":
/*!**********************************!*\
  !*** ./server/services/token.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst keys = __webpack_require__(/*! ../config/keys */ \"./server/config/keys.js\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst User = mongoose.model('users');\n\nconst generateAccessToken = (userID, expiresIn = 3600) => {\n  const secret = keys.tokenSecret;\n  const token = jwt.sign({}, secret, {\n    expiresIn,\n    subject: userID.toString()\n  });\n  return token;\n};\n\nconst verifyAccessToken = (bearerToken, done) => {\n  // split token and get encoded part\n  if (!bearerToken) return done(false);\n  const token = bearerToken.startsWith('bearer ') ? bearerToken.split(' ')[1] : null;\n  if (!token) return done(false, 401, 'Invalid token');\n\n  jwt.verify(token, keys.tokenSecret, async (err, decoded) => {\n    if (err) {\n      return done(false, 401, 'Unauthorized');\n    } else {\n      const user = await User.findById(decoded.sub).cache({\n        id: decoded.sub\n      });\n      console.log('************');\n      console.log(user);\n      return done(user ? true : false);\n    }\n  });\n};\n\nmodule.exports = {\n  generateAccessToken,\n  verifyAccessToken\n};\n\n//# sourceURL=webpack:///./server/services/token.js?");

/***/ }),

/***/ "./server/socket-server.js":
/*!*********************************!*\
  !*** ./server/socket-server.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst http = __webpack_require__(/*! http */ \"http\");\nconst WebSocket = __webpack_require__(/*! ws */ \"ws\");\nconst keys = __webpack_require__(/*! ./config/keys */ \"./server/config/keys.js\");\nconst { verifyAccessToken } = __webpack_require__(/*! ./services/token */ \"./server/services/token.js\");\n\nmodule.exports = app => {\n  console.log('about to create the web socket server...');\n  // initialize simple http server\n  const server = http.createServer();\n  const path = '/api/chat';\n\n  const verifyClient = (info, done) => {\n    const headers = info.req.headers;\n    if (!keys.allowedClientOrigins.includes(headers.origin)) return done(false);\n\n    // TESTING PURPOSES ONLY !!!\n    // comment the line below or refresh the token manually after authenticating\n    headers.authorization = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzAxMDU0NjAsImV4cCI6MTUzMDEwOTA2MCwic3ViIjoiNWIyYjZkMzRmNmY4OTUxNWVjODFlMWI2In0.1Fbe54UVVVq0sU3p2c4bIo0h9fWJ3WXDNQknZWmIams';\n    // *********************** //\n\n    if (!headers.authorization) {\n      return done(false, 401, 'Unauthorized');\n    }\n    verifyAccessToken(headers.authorization, done);\n  };\n\n  server.on('request', app);\n\n  // initialize the websocket server instance\n  const wss = new WebSocket.Server({ server, path, verifyClient });\n\n  wss.on('connection', websocket => {\n    console.log('connection');\n    websocket.on('message', message => {\n      console.log(`received : ${message}`);\n      websocket.send(`Hey! you sent : ${message}`);\n    });\n  });\n\n  // start wss server\n  // const PORT = process.env.PORT || 5000;\n  // server.listen(\n  //   PORT,\n  //   () => console.log(`Server started on port ${server.address().port}`)\n  // );\n\n  return server;\n};\n\n//# sourceURL=webpack:///./server/socket-server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

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

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redis\");\n\n//# sourceURL=webpack:///external_%22redis%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ws\");\n\n//# sourceURL=webpack:///external_%22ws%22?");

/***/ })

/******/ });