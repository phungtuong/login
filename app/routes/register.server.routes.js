module.exports = (app) => {
    var register = require('../controllers/register.server.controller');
    //app.get('/register', register.render);
    //app.post('/register', register.valid);
    app.route('/register')
        .get(register.render)
        .post(register.valid);
    
};