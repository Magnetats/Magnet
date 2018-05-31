<<<<<<< HEAD
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
=======
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
>>>>>>> dfd93e32b7147c09a8f61844bc1e83c75c904694
  username: {
    type: String,
    unique: true,
    required: true,
<<<<<<< HEAD
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
=======
>>>>>>> dfd93e32b7147c09a8f61844bc1e83c75c904694
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  passwordConf: {
    type: String,
    required: true,
  }
})

//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({
    email: email
  })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        let err = new Error('User not found.')
        err.status = 401
        return callback(err)
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user)
        } else {
          return callback()
        }
      })
    })
}

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})

const User = mongoose.model('User', UserSchema)
module.exports = User
=======
})

UserSchema.pre('save', function(next) {
  const user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
            return next(err)
        }
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err)
    }
    cb(null, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)
>>>>>>> dfd93e32b7147c09a8f61844bc1e83c75c904694
