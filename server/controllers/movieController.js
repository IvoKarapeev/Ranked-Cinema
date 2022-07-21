const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/', async (req,res) => {

    const movies =  await movieService.getAll().lean();

    res.send(movies);

});

router.post('/', async (req,res) => {

   const { name, description, imageUrl, trailerUrl, actors, category, author } = req.body;

   const views = 0;
   const creator = req.user;

   const newMovie = {
     name,
     description,
     imageUrl,
     trailerUrl,
     actors,
     category,
     author,
     views,
     creator
   };

   try {
    
        const createdMovie = await movieService.create(newMovie);
        
        res.send(createdMovie);

   } catch (error) {
        res.json(error)   
   }

});

router.get('/:movieId', async (req,res) => {

     const currentMovie = await movieService.getOneDetailed(req.params.movieId);
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

     const { name, description, imageUrl, trailerUrl, actors, category, author } = req.body;

     const movieData = {
          name,
          description,
          imageUrl,
          trailerUrl,
          actors,
          category,
          author
     };

     
     try {
          
          const updatedMovie = await movieService.update(req.params.movieId, movieData);
          
          res.json(updatedMovie);

     } catch (error) {
          res.json(error);
     }


});

router.get('/delete/:movieId', async (req,res) => {

     try {
          await movieService.delete(req.params.movieId);
          
          res.send('Movie Deleted!')
     } catch (error) {
          res.json(error);
     }

});

router.get('/comment/:movieId', async (req,res) => {

     try {
      
          const { comments,users } = await movieService.getComments(req.params.movieId);

          res.json({
               comments,
               users
          });

     } catch (error) {
          
          res.json(error);
     }

});

router.post('/comment/:movieId', async (req,res) => {

     try {
          const userId = req.user._id;
          const { comment } = req.body;

          console.log(userId, comment);

          const movie = await movieService.comment(req.params.movieId, userId, comment);
           
          res.json(movie);

     } catch (error) {
          
          res.json(error)

     }

});


module.exports = router;