const webpack = require('webpack');
const middlware = require('webpack-dev-middleware');
const compiler = webpack({ .. webpack options .. });
const bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('client/dist'));

app.listen(3000, () => console.log('you are live on localhost://3000'));
