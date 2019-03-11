const passport  = require('passport'),
      Strategy  = require('passport-local').Strategy;

passport.use('local.signup', new Strategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //Recibir más campos
}, async (req, username, password, done)=>{ //CallBack
  done();
}));
