module.exports = (app) => {
    var logout = require('../controllers/logout.server.controller');
    app.route('/logout')
        .get(logout.render)
};