exports.getLogin = (req, res, next) => {
    const isLoggedIn =

    // console.log( 
        req
    .get('Cookie')
    .split(';')[0]
    .trim()
    .split('=')[1] === 'true'
    // )
    ;
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    req.isLoggedIn = true; 
    res.setHeader('Set-Cookie', 'loggedIn = true; HttpOnly');
    res.redirect('/');
};
