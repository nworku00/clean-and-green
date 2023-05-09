var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var multiPurposeRouter = require('./routes/multiPurpose');
var detergentRouter = require('./routes/detergent');
var topicalRouter = require('./routes/topical');
var outdoorRouter = require('./routes/outdoor');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/multipurpose', multiPurposeRouter);
app.use('/detergent', detergentRouter);
app.use('/topical', topicalRouter);
app.use('/outdoor', outdoorRouter);

module.exports = app;
