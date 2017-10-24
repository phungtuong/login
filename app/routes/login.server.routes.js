module.exports = (app) => {
    var login = require('../controllers/login.server.controller');
    app.route('/login')
        .get(login.render)
        .post(login.login); 
};