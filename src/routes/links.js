const router = require('express').Router();

const db            = require('../database'),
    { isLoggedIn }  = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res) => {
  res.render('links/add');
});

router.post('/add', isLoggedIn, async (req, res) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description,
    user_id: req.user.id
  };
  await db.query('INSERT INTO links set ?', [newLink]);
  req.flash('success', 'Link saved succesfully');
  res.redirect('/links');
});

router.get('/', isLoggedIn, async (req, res) => {
  const links = await db.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
  res.render('links/list', {links: links});
});

router.get('/delete/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM links WHERE ID = ?', [id]);
  req.flash('success', 'Link removed succesfully');
  res.redirect('/links');
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const links = await db.query('SELECT * FROM links WHERE id = ?', [id]);
  res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description
  };
  await db.query('UPDATE links set ? WHERE id = ?', [newLink, id]);
  req.flash('success', 'Link updated succesfully');
  res.redirect('/links');
})

module.exports = router;