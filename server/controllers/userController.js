const router = require('express').Router();
const userService = require('../services/userService');
const { COOKIE_SESSION_USER } = require('../config/env');

router.post('/register',async (req,res) => {

    const { firstName, secondName, username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.json('Passwords must be equal!');
    };

    try {
        
        const user = await userService.register(firstName, secondName, username, password);
        const token = await userService.createToken(user);

        res.cookie(COOKIE_SESSION_USER, token, { httpOnly:true });
        return res.json(token);

    } catch (error) {

        res.json(error);
    }

});

router.post('/login',async (req,res) => {
    const { username, password } = req.body;

    try {
        
        const user = await userService.login(username,password);
        const token = await userService.createToken(user);

        res.cookie(COOKIE_SESSION_USER, token, { httpOnly:true });

        return res.json(token);

    } catch (error) {
        
        res.json(error);
    }

})

module.exports = router;
