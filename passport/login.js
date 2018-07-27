const LocalStrategy = require('passport-local').Strategy
// const Login = require('../client/src/components/Registration/Login')
const User = require('../database/models/user')
const bCrypt = require('bcrypt-nodejs')

module.exports = (passport) => {
  passport.use('login', new LocalStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      // check in mongo if a user with username exists or not
      User.findOne(
        {
          username: username,
        },
        (err, user) => {
          // In case of any error, return using the done method
          if (err) {
            return done(err)
          // Username does not exist, log the error and redirect back
          } if (!user) {
            console.log(`User Not Found with username ${username}`)
            return done(null, false, req.flash('message', 'Username Not found.'))
          }
          // User exists but wrong password, log the error
          if (!isValidPassword(user, password)) {
            console.log('Invalid Password for this user')
            return done(null, false, req.flash('message', 'Invalid Password for this user')) // redirect back to login page
          }
          // User and password both match, return user from done method
          // which will be treated like success
          console.log('you are logged in user info in passport coming back', user)
          console.log('checking the session info', 'req.sesion.id', req.session.id, 'user.id', user.id)
          return done(null, user)
        },
      )
    },
  ))

  const isValidPassword = (user, password) => bCrypt.compareSync(password, user.password)
}
