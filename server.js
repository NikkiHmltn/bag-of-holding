require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig');
const flash = require('connect-flash');
const SECRET_SESSION = process.env.SECRET_SESSION;
console.log(SECRET_SESSION)
const app = express();

//isLoggedIn middleware
const isLoggedIn = require('./middleware/isLoggedIn')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log(res.locals.alerts)
  res.render('index', {alerts: res.locals.alerts})
});

app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

app.use('/auth', require('./routes/auth'));


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
