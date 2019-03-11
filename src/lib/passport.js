const passport  = require('passport'),
      Strategy  = require('passport-local').Strategy;

passport.use('local.signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: True //Recibir más campos
}, async (req, username, password, done)=>{ //CallBack

  done();
}));
