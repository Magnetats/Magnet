import { StaticRouter } from 'react-router'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import bodyParser from 'body-parser'
import expressLogging from 'express-logging'
import logger from 'logops'
import path from 'path'
import Root from '../client/root'

const auth = require('../routes/auth')
const book = require('../routes/book')

const favicon = require('serve-favicon')

// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducers from '../client/src/reducers'
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://crizzcoxx:Bulletproof@ds151433.mlab.com:51433/magnet', {
  promiseLibrary: require('bluebird')
})
  .then(() => { // if all is ok we will be here
    console.log('You are connected in more ways then you know')
  })
  .catch((err) => { // if error we will be here
    console.error('App starting error:', err.stack)
    process.exit(1)
  })

const app = express()

app.use(expressLogging(logger))

app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(bodyParser.json())

// app.use(favicon(path.join(__dirname, './client/.dist', 'favicon.ico')))
app.use(favicon('favicon.ico'))

app.get('/testendpoint', (req, res) => {
  res.send('Hello homeboyz')
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
export default app
