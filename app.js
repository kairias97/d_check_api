var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var RateLimit = require('express-rate-limit');
var routes = require('./server/routes/index');
var config = require('./config'); // get our config file
// var massive = require("massive");
// 
var app = module.exports = express();
app.set('env', process.env.NODE_ENV || 'development');

var apiUrl = '/api/v1';

app.enable('trust proxy');



app.set('connectionString', config.connectionString); // secret variable


app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.setHeader('Access-Control-Allow-Headers', 'x-access-with, content-type,x-access-token,Content-Type,x-reset-token, x-auto-token, Authorization');
    res.sendStatus(200);
});

// Add headers
app.use(function(req, res, next) {


    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'x-access-with, content-type,x-access-token,x-reset-token,x-auto-token,Content-Type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }

    // Pass to next layer of middleware
    next();
});
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json({
    limit: '10mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(apiUrl, routes.indexRoute);
app.use(apiUrl, routes.router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        // res.status(500);
        res.status(err.status || 500).send({
            message: err.message,
            code: err.code,
            detail: err.detail,
            severity: err.severity,
            error: err.stack
        });

        console.error(err.stack);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {

    res.status(err.status || 500).send({
        message: err.message,
        error: {}
    });
});

module.exports = app;