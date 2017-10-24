
exports.render = (req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/profile');
    }
    else {
        res.render('../views/login');
    }
};
exports.login = (req, res) => {
    var User = require('mongoose').model('User');

    User.findOne({ 'username': req.body.username }, (err, user) => {
        if (!err) {
            if (user&&user.password == req.body.password) {
                req.session.user = user;
                return res.redirect('/profile');
            }
            else {
                res.render('../views/login', {
                    loginError: 'Invalid Login!',
                })
        }}
        else {
            console.log('Error:'+err);
        }
        
    })
}