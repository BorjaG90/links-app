const express   = require('express'),
      hbs       = require('express-handlebars'),
      morgan    = require('morgan'),
      path      = require('path');

// Init
const app =express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Global
app.use((req, res, next) => {

  next();
});


// Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Start
app.listen(app.get('port'), () => {
  console.log('[Init] Server on port', app.get('port'));
});