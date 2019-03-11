const passport  = require('passport'),
      Strategy  = require('passport-local').Strategy;

const db        = require('../database'),
      helpers   = require('../lib/helpers');

passport.use('local.signup', new Strategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //Recibir más campos
}, async (req, username, password, done)=>{ //CallBack
  const { fullname } = req.body;
  const newUser = {
    username, //username: username
    password,
    fullname
  };
  newUser.password = await helpers.encryptPassword(password);

  const result = await db.query('INSERT INTO users SET ?', [newUser]);
  newUser.id = result.insertId;
  
  return done(null, newUser);
}));

passport.serializeUser((user, done) => {

})
