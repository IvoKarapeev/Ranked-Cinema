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

router.get('/:movieId', async (req,res) => {

     const currentMovie = await movieService.getOneDetailed(req.params.movieId).lean();
     if (currentMovie) {
          res.send(currentMovie);
     } else {
          res.send('Current Movie Not Found!');
     };

});

router.get('/edit/:movieId', async (req,res) => {

     const currentMovie = await movieService.getOne(req.params.movieId).lean();
     if (currentMovie) {
          res.send(currentMovie);
     } else {
          res.send('Current Movie Not Found!');
     };

});

router.post('/edit/:movieId', async (req,res) => {

     const { name, description, imageUrl, actors, author } = req.body;

     const movieData = {
          name,
          description,
          imageUrl,
          actors,
          author 
     };

     const updatedMovie = await movieService.update(req.params.movieId, movieData);

     if (updatedMovie) {
          res.send(updatedMovie);
     } else {
          res.send('Cant Update This Movie');          
     };

});



module.exports = router;