const passport  = require('passport'),
      Strategy  = require('passport-local').Strategy;

const db = require('../database');

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
  await db.query('INSERT INTO users SET ?', [newUser]);
}));
