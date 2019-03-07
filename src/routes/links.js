const router = require('express').Router();

const db = require('../database');

router.get('/add', (req, res) => {
  res.render('links/add');
});

router.post('/add', async (req, res) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description
  };
  await db.query('INSERT INTO links set ?', [newLink]);
  res.redirect('/links');
});

router.get('/', async (req, res) => {
  const links = await db.query('SELECT * FROM links');
  console.log(links);
  res.render('links/list', {links: links});
});

module.exports = router;