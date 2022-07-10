const router = require('express').Router();

router.get('/',(req,res) => {
    res.send('Movies Here')
});

module.exports = router;