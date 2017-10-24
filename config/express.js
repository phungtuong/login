var express = require('express'),
    config = require('./config'),
    ejs = require('ejs'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');
    connectMongo=require('connect-mongo');
module.exports = () => {
    var app = express();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use(cookieParser());
    app.use(session({
        saveUninitialized: true,
        resave: false,
        cookie: {maxAge: 2592000000}, 
        secret: config.sessionSecret
        }));
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/register.server.routes.js')(app);
    require('../app/routes/login.server.routes.js')(app);
    require('../app/routes/profile.server.routes.js')(app);
    require('../app/routes/logout.server.routes.js')(app);
    return app;
};