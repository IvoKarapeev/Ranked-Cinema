const { SECRET } = require('../config/env');
const jwt = require('jsonwebtoken');

exports.auth = async ( req,res,next ) => {

    const token = req.headers['x-authorization'];
    // const token = req.cookies[COOKIE_SESSION_USER];
    
    if (token) {
        jwt.verify( token, SECRET, (err,decodedToken) => {

            if (err) {
                // res.clearCookie(COOKIE_SESSION_USER);
                console.log(err);
                // return next(err);
                // return res.redirect('login')
            };

            req.user = decodedToken;
            res.locals.user = decodedToken;

            next();
        });
    }else{

        next();
    }
};

exports.isAuth = ( req,res,next ) => {
    if (!req.user) {
        return res.json('You need to login first!')
    }

    next();
};

exports.isGuest = ( req,res,next ) => {
    if (req.user) {
        return res.json('You need to logout first!')

    }

    next();
};
