exports.render = (req, res) => {
    req.session.destroy((err) =>{
        if (err) console.log('Error:'+err);
    })
    res.redirect('/login');
};