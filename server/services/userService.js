const User = require('../models/User');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/env');


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