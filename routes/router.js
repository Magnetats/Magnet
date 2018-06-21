const express = require('express')

const router = express.Router()
const User = require('../database/models/user')

// GET route for reading data
// router.get('/', function (req, res, next) {
//   return res.sendFile(path.join(__dirname + '/templateLogReg/index.html'))
// })

//POST route for updating data
router.post('/registerUser', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    let err = new Error('Passwords do not match.')
    err.status = 400
    res.send('passwords dont match')
    return next(err)
  }

  if (req.body.firstName &&
    req.body.lastName &&
    req.body.username &&
    req.body.email &&
    req.body.password &&
    req.body.passwordConf &&
    req.body.companyName &&
    req.body.userRole) {

    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
      companyName: req.body.companyName,
      userRole: req.body.userRole
    }

    User.create(userData, (error, user) => {
      if (error) {
        return next(error)
      } else {
        req.session.userId = user._id
        return res.redirect('/home')
      }
    })

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword,  (error, user) => {
      if (error || !user) {
        var err = new Error('Wrong email or password.')
        err.status = 401
        return next(err)
      } else {
        req.session.userId = user._id
        return res.redirect('/home')
      }
    })
  } else {
    var err = new Error('All fields required.')
    err.status = 400
    return next(err)
  }
})

// GET route after registering
router.get('/home', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error)
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
        }
      }
    })
})

// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/')
      }
    })
  }
})

module.exports = router