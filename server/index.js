const bodyParser = require('body-parser');
const express = require('express');
const expressLogging = require('express-logging');
const logger = require('logops');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const config = require('../webpack.config.js');
const app = express();

app.use(expressLogging(logger));

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true
}));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/testendpoint', function (req, res) {
  console.log('hello homies');
  res.send('hello dudettes?');
});

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
