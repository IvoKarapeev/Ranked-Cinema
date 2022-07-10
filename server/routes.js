const router = require('express').Router();
const movieController = require('./controllers/movieController');

router.use('/movies',movieController)

module.exports = router;
