
const dbUser = 'videochat_admin';
const dbPwd = 'th1s1sav1deochatdb';

module.exports = {
  googleClientID: '159196855743-1sriggald1d4n1jpalqfvb1j1t6bf7em.apps.googleusercontent.com',
  googleClientSecret: '14lH6_A2MLv-jrUjiAnfX5sH',
  facebookClientID: '186305602070094',
  facebookClientSecret: '735b92376ea1b920677ad9718e7ce07b',
  tokenSecret: 'mySuperSecretTokenKey',
  mongoURI: `mongodb://${dbUser}:${dbPwd}@ds263640.mlab.com:63640/video_chat-dev`,
  redisUrl: 'redis://127.0.0.1:6379',
}
