module.exports = (req, res, next) => {
  console.log("*******************************")
  // return (req, res, next) => {
    // if(req.headers['x-forwarded-proto'] === 'https') {
    if(req.secure){
      console.log('request is secure');
      next();
    };
    console.log('request is NOT secure, redirecting');
    res.redirect('https://' + req.hostname + req.url);
  };
// };
