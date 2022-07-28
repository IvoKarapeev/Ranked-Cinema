const router = require('express').Router();
const userService = require('../services/userService');
const { isGuest } = require('../middlewares/userMiddlewares');


router.post('/register',isGuest,async (req,res) => {

    const { firstName, secondName, username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.json('Passwords must be equal!');
    };

    try {
        
        const user = await userService.register(firstName, secondName, username, password);
        const token = await userService.createToken(user);

        return res.json({
            'AccessToken':token,
            _id:user._id,
            username:user.username
        });

    } catch (error) {

        res.json({error:error});
    }

});

router.post('/login',isGuest,async (req,res) => {
    const { username, password } = req.body;

    try {
        
        const user = await userService.login(username,password);
        const token = await userService.createToken(user);

        return res.json({
            'AccessToken':token,
            _id:user._id,
            username:user.username
        });

    } catch (error) {
        
        res.json({error:error});
    }

});

module.exports = router;
