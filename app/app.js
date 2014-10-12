var express = require('express');

// We set up mongoose with the module mongoose-q
// so that we can use promises instead of callbacks
var mongoose = require('mongoose-q')();
var connection_string = 'localhost/stratta';
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/stratta';
}
mongoose.connect(connection_string);
var db = mongoose.connection;

// save all the model classes into a single object
var model = {
    //TODO: this is just an example. replace with real models
    Example: require('./models/example')
};

// create the express app that we will attach
// all our middleware to
var app = express();

// attach the models to the request object
app.use(function(req, res, next) {
    req.model = model;
    next();
});

// attach the controllers to the appropriate routes
app.use('/', require('./controllers/index'));

//TODO: set up request logging (morgan)
//TODO: set up session/authentication management
//TODO: set up error handlers

module.exports = app;


