const router = require('express').Router();

const db = require('../database');

router.get('/add', (req, res) => {
  res.render('links/add');
});

router.post('/add');

module.exports = router;