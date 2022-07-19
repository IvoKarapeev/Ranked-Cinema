const router = require('express').Router();
const movieController = require('./controllers/movieController');
const userController = require('./controllers/userController');

router.use('/movies',movieController);
router.use('/user',userController);

module.exports = router;
