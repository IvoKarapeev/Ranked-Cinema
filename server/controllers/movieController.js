const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/', async (req,res) => {

    const movies =  await movieService.getAll().lean();
    res.send(movies);

});

router.post('/', async (req,res) => {

   const { name, description, imageUrl, actors, author } = req.body;

   const newMovie = {
    name,
    description,
    imageUrl,
    actors,
    author
   };

   try {
    
        const createdMovie = await movieService.create(newMovie);
        
        res.send(createdMovie);

   } catch (error) {
        res.send(error);    
   }

});


module.exports = router;