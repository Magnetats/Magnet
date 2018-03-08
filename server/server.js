import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import bodyParser from 'body-parser'
import expressLogging from 'express-logging'
import logger from 'logops'

import { StaticRouter } from 'react-router';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import Root from '../client/root.jsx'
// import reducers from '../client/src/reducers';
const app = express()

app.use(expressLogging(logger));

app.get('/testendpoint', (req, res) => {
  res.send('Hello homeboyz')
})

app.get('*', (req, res) => {
    let application = renderToString (
      // <Provider store={createStore(reducers)}>
        <StaticRouter
          location={req.url}
          context={{}}>
          <Root />
        </StaticRouter>
      // </Provider>
    )
    let html = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HMR all the things!</title>
            <meta name="description" content="">
            <meta name="viewport"
            content="width=device-width,  initial-scale=1">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
            <link rel="stylesheet" type="text/css" href="/client/.dist/styles.css">
        </head>
        <body>
          <script src="//unpkg.com/moment@2.10.6/min/moment-with-locales.min.js"></script>
          <div id="root">${application}</div>
          <script src="http://localhost:3001/client.js"></script>
        </body>
    </html>`
res.send(html)
})
export default app
