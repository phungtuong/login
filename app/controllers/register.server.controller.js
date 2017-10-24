
exports.render = (req, res) => {
    if (req.session && req.session.user) {
        res.redirect('/profile');
    }
    else {
        res.render('../views/register');
    }
};
exports.valid = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    var nameError = "";
    var User = require('mongoose').model('User');
    User.count({ 'username': username }, (err, count) => {
        if (count > 0) {
            nameError += 'Username has been already used!';
        }

        if (nameError) {
            res.render('../views/register', {
                nameError: nameError,
            });
        }
        else {
            var user = new User({
                'username': username,
                'password': password,
                'email': email
            });
            user.save((err) => {                
                if (err) {
                    console.log('Could NOT create User: ', err);
                    return next(err);
                } else {
                    req.session.user = user;
                    return res.redirect('/profile');
                }
            });
        }
    })
}
