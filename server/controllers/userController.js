const router = require('express').Router();
const userService = require('../services/userService');


router.post('/register',async (req,res) => {

    const { firstName, secondName, username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.json('Passwords must be equal!');
    };

    try {
        
        const user = await userService.register(firstName, secondName, username, password);
        const token = await userService.createToken(user);

       return res.json(token);

    } catch (error) {

        console.log(error);
    }

});

module.exports = router
