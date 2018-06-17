import { StaticRouter } from 'react-router'
import express from 'express'
// import session from 'express-session'
import uuid from 'uuid/v4'
import React from 'react'
import { renderToString } from 'react-dom/server'
import bodyParser from 'body-parser'
import expressLogging from 'express-logging'
import logger from 'logops'
import cookieParser from 'cookie-parser'
// import path from 'path'
import Root from '../client/root'
import dbConfig from '../database/db'

const passport = require('passport')
const expressSession = require('express-session')
// const routes = require('../routes/router')(passpoart)

// const MongoStore = require('connect-mongo')(session)
// import auth from '../routes/auth'
// import book from '../routes/book'

// const FileStore = require('session-file-store')(session)
// const LocalStrategy = require('passport-local').Strategy

const favicon = require('serve-favicon')
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducers from '../client/src/reducers'
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connect(dbConfig.url, {
  promiseLibrary: require('bluebird'),
})
  .then(() => { // if all is ok we will be here
    console.log('You are connected in more ways then you know')
  })
  .catch((err) => { // if error we will be here
    console.error('App starting error:', err.stack)
    process.exit(1)
  })
// const db = mongoose.connection

// const users = [
//   {id: '2f24vvg', email: 'test@test.com', password: 'password'}
// ]

// // configure passport.js to use the local strategy
// passport.use(new LocalStrategy(
//   { usernameField: 'email' },
//   (email, password, done) => {
//     console.log('Inside local strategy callback')
//     // here is where you make a call to the database
//     // to find the user based on their username or email address
//     // for now, we'll just pretend we found that it was users[0]
//     const user = users[0]
//     if (email === user.email && password === user.password) {
//       console.log('Local strategy returned true')
//       return done(null, user)
//     }
//   },
// ))

// tell passport how to serialize the user
// passport.serializeUser((user, done) => {
//   console.log('Inside serializeUser callback. User id is save to the session file store here')
//   done(null, user.id)
// })

// passport.deserializeUser((id, done) => {
//   console.log('Inside deserializeUser callback')
//   console.log(`The user id passport saved in the session file store is: ${id}`)
//   const user = users[0].id === id ? users[0] : false
//   done(null, user)
// })
//use sessions for tracking logins
// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db,
//   }),
// }))
const app = express()

app.use(favicon('favicon.ico'))
app.use(expressLogging(logger))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(expressSession({
  secret: 'mySecretKey',
}))
app.use(passport.initialize())
app.use(passport.session())

const flash = require('connect-flash')
// Using the flash middleware provided by connect-flash to store messages in session
app.use(flash())
// Initialize Passport
const initPassport = require('../passport/init')

initPassport(passport)

const routes = require('../routes/index')(passport)

app.use('/', routes)
// app.use('/register', routes)

app.post('/testendpoint', (req, res) => {
  console.log('whats in server under testendpoint', req.body)
  const data = req.body
  const uniqueId = uuid()
  res.send(`test page. Received the unique id: ${uniqueId}\n`)
  res.send('hello sailor')
  // res.send('data coming back from server', data)
})
// app.use('/api/book', book)
// app.use('/api/auth', auth)
// add & configure middleware
// app.use(session({
//   genid: (req) => {
//     console.log('Inside the session middleware')
//     console.log(req.sessionID)
//     return uuid() // use UUIDs for session IDs
//   },
//   store: new FileStore(),
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
// }))
// app.use(passport.initialize())
// app.use(passport.session())

// app.get('/', (req, res) => {
//   console.log('Inside the homepage callback function')
//   console.log(req.sessionID)
//   res.send(`You hit home page!\n`)
// })

// // create the login get and post routes
// app.get('/login', (req, res) => {
//   console.log('Inside GET /login callback')
//   console.log(req.sessionID)
//   res.send(`You got the login page!\n`)
// })

// app.post('/login', (req, res, next) => {
//   console.log('Inside POST /login callback')
//   passport.authenticate('local', (err, user, info) => {
//     console.log('Inside passport.authenticate() callback')
//     console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
//     console.log(`req.user: ${JSON.stringify(req.user)}`)
//     req.login(user, (err) => {
//       console.log('Inside req.login() callback')
//       console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
//       console.log(`req.user: ${JSON.stringify(req.user)}`)
//       return res.send('You were authenticated & logged in!\n')
//     })
//   })(req, res, next)
// })

// app.get('/authrequired', (req, res) => {
//   console.log('Inside GET /authrequired callback')
//   console.log(`User authenticated? ${req.isAuthenticated()}`)
//   if (req.isAuthenticated()) {
//     res.send('you hit the authentication endpoint\n')
//   } else {
//     res.redirect('/')
//   }
// })


app.get('*', (req, res) => {
  const application = renderToString(
    // <Provider store={createStore(reducers)}>
    <StaticRouter
      location={req.url}
      context={{}}>
      <Root />
    </StaticRouter>
    // </Provider>
  )
  const html = `<!doctype html>
    <html className"no-js" lang="">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>HMR all the things!</title>
        <meta name="description" content="">
        <meta name="viewport"
        content="width=device-width,  initial-scale=1">
        <link rel="stylesheet" type="text/css" href="/client/src/styling/styles.css">
        <link rel="stylesheet" type="text/css" href="/client/src/styling/styles.scss">
      </head>
      <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="//unpkg.com/moment@2.10.6/min/moment-with-locales.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.0/semantic.min.js"></script>
        <div id="root">${application}</div>
        <script src="http://localhost:3001/client.js"></script>
      </body>
    </html>`
  res.send(html)
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('File Not Found')
  err.status = 404
  next(err)
})

// error handler
// define as the last app.use callback
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})

export default app
