exports.render = (req, res) => {
    if (req.session && req.session.user)
    res.render('../views/profile',{      
            'userName':req.session.user.username,
            'email':req.session.user.email,       
    });
    else {
        var value='<html><head><title>Opps...</title></head><body>Must login to access this page. <br> Click  <a href="login">here</a> to login.<br> Or click <a href="register">here</a> to sign in. </body></html>'
        res.send(value);
        //res.send('');
        }
};