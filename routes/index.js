const express = require('express')

const router = express.Router()

// const isAuthenticated = function (req, res, next) {
//   // if user is authenticated in the session, call the next() to call the next request handler
//   // Passport adds this method to request object. A middleware is allowed to add properties to
//   // request and response objects
//   if (req.isAuthenticated())
//     return next()
//   // if the user is not authenticated then redirect him to the login page
//   res.redirect('/login')
// }

module.exports = (passport) => {
  /* GET login page. */
  // router.get('/', (req, res) => {
  //   // Display the Login page with any flash message, if any
  //   console.log('req cookeeee in index.js', req.cookies)
  //   console.log('reqsession id in server index', req.sessionID)
  //   res.send(req.cookies.user_sid)
  // })
  /* Handle Login POST */
  // router.post('/api/login', passport.authenticate('login', {
  //   successRedirect: '/home',
  //   failureRedirect: '/login',
  //   failureFlash: true,
  // }))

  router.post(
    '/api/login', passport.authenticate('login'),
    (req, res) => {
      if (req.user) {
        return res.status(200).json({
          authenticated: true,
        })
      }
      return res.status(401).json({
        error: 'User is not authenticated',
        authenticated: false,
      })
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
      // const myLoginSesh = req.cookies
      // console.log('req login session on my index file', myLoginSesh)
      // res.json({
      //   myLoginSesh,
      // })
    },
  )

  /* GET Registration Page */
  // router.get('/signup', (req, res) => {
  //   res.render('register', {
  //     message: req.flash('message'),
  //   })
  // })
  /* Handle Registration POST */
  // router.post('/api/signup', passport.authenticate('signup', {
  //   successRedirect: '/api/home',
  //   failureRedirect: '/api/signup',
  //   failureFlash: true,
  // }))
  router.post(
    '/api/signup', passport.authenticate('signup'),
    (req, res) => {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      if (req.user) {
        return res.status(200).json({
          authenticated: true,
        })
      }
      return res.status(401).json({
        error: 'User is not authenticated',
        authenticated: false,
      })
    },
  )
  // /* GET Home Page */
  // router.get('/home', isAuthenticated, (req, res) => {
  //   res.render('home', {
  //     user: req.user,
  //   })
  // })
  router.get('/api/home', (req, res) => {
    if (req.user) {
      return res.status(200).json({
        user: req.user,
        authenticated: true,
      })
    }
    return res.status(401).json({
      error: 'User is not authenticated',
      authenticated: false,
    })
  })
// GET for logout logout
  router.get('/api/logout', (req, res, next) => {
    console.log('right before deleting', req.session)
    if (req.session) {
    // delete session object
      req.session.destroy(function(err) {
        if (err) {
          return next(err)
        }
      })
      console.log('after deleting the logOutSesh', req.session)
      return res.status(200).json({
        authenticated: false,
      })
    }
  })
  return router
}
