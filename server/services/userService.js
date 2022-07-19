const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { SALT_ROUNDS,SECRET } = require('../config/env');


exports.register = async (firstName,secondName,username,password) => {

    if (password.length < 4) {
        throw{
            error:'The password should be at least four characters long!'
        }
    };

    password = await bcrypt.hash(password,SALT_ROUNDS);

    const newUser = {
        firstName,
        secondName,
        username,
        password
    };

    const user = await User.create(newUser);

    return user;

};

exports.login = async (username,password) => {

    const user = await User.findOne({username});

    if (!user) {
        throw {
            error: 'Cannot find user!'
        };
    };

    const isAuntenticated = await bcrypt.compare(password,user.password);

    if (!isAuntenticated) {
        throw {
            error: 'Wrong username or password!'
        };
    };

    return user;
};

exports.createToken = (user) => {

    const payload = {_id: user._id, username: user.username };
    const option = { expiresIn:'2d' };

    return new Promise((resolve,reject) => {
        jwt.sign( payload, SECRET, option ,(err,decodedToken) => {

            if (err) {
                return reject(err);
            }

            resolve(decodedToken);
        });
    });

};