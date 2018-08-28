import { StaticRouter } from 'react-router'
import express from 'express'
// import multer from 'multer'
// import fs from 'fs'
import uuid from 'uuid/v4'
import React from 'react'
import { renderToString } from 'react-dom/server'
import bodyParser from 'body-parser'
import expressLogging from 'express-logging'
import logger from 'logops'
import path from 'path'
import cookieParser from 'cookie-parser'

// import User from '../database/models/user'
import Root from '../client/root'
import dbConfig from '../database/db'
import fileUpload from '../routes/fileUpload'

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
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
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
app.use('/', fileUpload)
app.use(function printSession(req, res, next) {
  console.log('req.session from the server', req.session)
  return next()
})

// const insertDocuments = (db, filePath, callback) => {
//   const collection = db.collection('users')
//   collection.insertOne({
//     'imagePath': filePath,
//   }, (err, result) => {
//     assert.equal(err, null)
//     callback(result)
//   })
// }

// app.post('/api/profile/photo', upload.single('selectedFile'), (req, res) => {
//   const userName = 'crizzcoxx'

//   /*
//     We now have a new req.file object here. At this point the file has been saved
//     and the req.file.filename value will be the name returned by the
//     filename() function defined in the diskStorage configuration. Other form fields
//     are available here in req.body.
//   */
//   // User.save((err, db) => {
//   //   assert.equal(null, err)
//   //   insertDocuments(db, './uploads/' + req.file.filename, () => {
//   //     res.json({'message': 'File uploaded successfully'})
//   //   })
//   // })
//   // res.send()
// })

// app.post('/search', function(req, res, next) {
//   var meetupReqData = req.body;
//   console.log('this is my body', meetupReqData.currSearchTerm);
//   MeetupHelper.searchMeetUp(meetupReqData.currSearchTerm, function(groupInfo) {
//     console.log(groupInfo[1].name, null, 2);
//     db.save(groupInfo, function() {
//       res.status(201).send('response successful');
//     });
//   });

// });


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '.dist/images/uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   },
// })
// let upload = multer({ storage: storage })

// User.

app.post('/testendpoint', (req, res) => {
  console.log('whats in server under testendpoint', req.body)
  const data = req.body
  const uniqueId = uuid()
  res.send(`test page. Received the unique id: ${uniqueId}\n`)
  res.send('hello sailor')
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
