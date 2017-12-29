import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import bodyParser from 'body-parser'
import expressLogging from 'express-logging'
import logger from 'logops'

import App from '../common/App.jsx'
const app = express()

app.use(expressLogging(logger));

app.get('/testendpoint', (req, res) => {
  res.send('Hello homeboy')
})

app.get('*', (req, res) => {
    let application = renderToString(<App />)
    let html = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HMR all the things!</title>
            <meta name="description" content="">
            <meta name="viewport"
            content="width=device-width,  initial-scale=1">
        </head>
        <body>
            <div id="root">${application}</div>
            <script src="http://localhost:3001/client.js"></script>
        </body>
    </html>`
res.send(html)
})
export default app
