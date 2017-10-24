module.exports = (app) => {
    var profile = require('../controllers/profile.server.controller');
    app.get('/profile', profile.render);
};