const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig')

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/signup', (req, res) => {
  console.log(req.body);

  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  })
  .then(([user, created]) => {
    if (created) {
      //if created (boolean for true), success and redirect back to home
      console.log(`${user.name} was created`)
      //flash message
      const successObj = {
        successRedirect: '/',
        successFlash: 'Account created and logging in....'
      }
      passport.authenticate('local',successObj) (req, res);
    }else {
      //email already exists
      req.flash('error', 'Email already exists!')
      res.redirect('/auth/signup')
    }
  })
  .catch(err => {
    console.log('Error', err)
    req.flash('error', 'Either email or password is incorrect. Please try again.')
    res.redirect('/auth/signup')
  })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/', 
  failureRedirect: '/auth/login', 
  successFlash: 'Welcome back...', 
  failureFlash: 'Either email or password is incorrect. Please try again.'
}))

router.get('/logout', (req, res) => {
  req.logOut();
  req.flash('success', 'Logging out... See you soon@')
  res.redirect('/')
})

module.exports = router;


