const router = require('express').Router();

const passport = require('passport');

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// router.post('/signup', (req,res) => {
//   passport.authenticate('local.signup', {
//     successRedirect: '/profile',
//     failureRedirect: '/signup',
//     failureFlash: true
//   })
// });

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/signin', (req, res) => {
  res.render('auth/signin');
});

router.post('/signin', (req, res, next) => {
  passport.authenticate('local.signin',{
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next);
});

router.get('/profile', (req, res) => {
  res.send('This is your profile');
});
module.exports = router;