const bCrypt = require('bcrypt-nodejs')
const LocalStrategy = require('passport-local').Strategy
const User = require('../database/models/user')

module.exports = (passport) => {
  passport.use('signup', new LocalStrategy(
    {
      passReqToCallback : true, // allows us to pass back the entire request to the callback
    },
    (req, username, password, done) => {
      const findOrCreateUser = () => {
        // find a user in Mongo with provided username
        User.findOne({ 'username' :  username }, function (err, user) {
          // In case of any error, return using the done method
          if (err) {
            console.log(`Error in SignUp: ${err}`)
            return done(err)
          }
          // already exists
          if (user) {
            console.log(`User already exists with username: ${username}`)
            return done(null, false, req.flash('message', 'User Already Exists'))
          } else {
            // if there is no user with that email
            // create the user
            const newUser = new User()
            // set the user's local credentials
            newUser.username = username
            newUser.password = createHash(password)
            newUser.email = req.param('email')
            newUser.firstName = req.param('firstName')
            newUser.lastName = req.param('lastName')
            newUser.companyName = req.param('companyName')
            newUser.userRole = req.param('userRole')
            // save the user
            newUser.save(function(err) {
              if (err) {
                console.log(`Error in Saving user: ${err}`)
                throw err
              }
              console.log('User Registration succesful')
              console.log('this is my session', req.session)
              return done(null, newUser)
            })
          }
      })
    }
      // Delay the execution of findOrCreateUser and execute the method
      // in the next tick of the event loop
      process.nextTick(findOrCreateUser)
    },
  ))
  // Generates hash using bCrypt
  const createHash = (password) => {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
  }
}
