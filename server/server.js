import { StaticRouter } from 'react-router'
import express from 'express'
import uuid from 'uuid/v4'
import React from 'react'
import { renderToString } from 'react-dom/server'
import bodyParser from 'body-parser'
import expressLogging from 'express-logging'
import logger from 'logops'
import path from 'path'
import cookieParser from 'cookie-parser'
import Root from '../client/root'
import dbConfig from '../database/db'

const passport = require('passport')
const session= require('express-session')

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

const app = express()

app.use(favicon('favicon.ico'))
app.use(expressLogging(logger))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/client/.dist')))

const uniqueId = uuid()

app.use(session({
  // key: 'user_sid',
  name: 'server-session-cookie-id',
  secret: uniqueId,
  resave: false,
  saveUninitialized: false,
  // cookie: {
  //   secure: true,
  // },
}))

app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  next()
})

const flash = require('connect-flash')
// Using flash middleware storing messages in session
app.use(flash())
// Initializing Passport
const initPassport = require('../passport/init')

initPassport(passport)

const routes = require('../routes/index')(passport)

// app.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); next() })
app.use('/', routes)
app.use(function printSession(req, res, next) {
  console.log('req.session', req.session);
  return next();
})

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
        <title>Magnet</title>
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
