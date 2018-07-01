const express = require('express')

const router = express.Router()

const isAuthenticated = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated())
    return next()
  // if the user is not authenticated then redirect him to the login page
  res.redirect('/api/login')
}

module.exports = (passport) => {
  /* GET login page. */
  router.get('/', (req, res) => {
    // Display the Login page with any flash message, if any
    res.render('index', {
      message: req.flash('message'),
    })
  })
  /* Handle Login POST */
  router.post('/api/login', passport.authenticate('login', {
    successRedirect: '/api/home',
    failureRedirect: '/api/login',
    failureFlash: true,
  }))
  /* GET Registration Page */
  // router.get('/signup', (req, res) => {
  //   res.render('register', {
  //     message: req.flash('message'),
  //   })
  // })
  /* Handle Registration POST */
  router.post('/api/signup', passport.authenticate('signup', {
    successRedirect: '/api/home',
    failureRedirect: '/api/signup',
    failureFlash: true,
  }))
  // /* GET Home Page */
  // router.get('/home', isAuthenticated, (req, res) => {
  //   res.render('home', {
  //     user: req.user,
  //   })
  // })
  router.get('/api/home', isAuthenticated, (req, res) => {
    res.status(200).json({
      user: req.user,
    })
  })
  /* Handle Logout */
  router.get('/api/logout', (req, res) => {
    console.log('logout request data', req)
    req.logout()
    // res.redirect('/api/login')
    res.send('testing if this endpoint is working')
  })
  return router
}
