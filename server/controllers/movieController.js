const router = require('express').Router();
const movieService = require('../services/movieService');
const { isAuth } = require('../middlewares/userMiddlewares');

router.get('/', async (req,res) => {

    const movies =  await movieService.getAll().lean();

    res.json(movies);

});

router.post('/',isAuth, async (req,res) => {

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
    
        const createdMovie = await movieService.create(newMovie,creator);
        
        res.send(createdMovie);

   } catch (error) {
        res.status(401).json(error)   
   }

});

router.get('/:movieId', async (req,res) => {

     const currentMovie = await movieService.getOneDetailed(req.params.movieId);
     if (currentMovie) {
          res.json(currentMovie);
     } else {
          res.json('Current Movie Not Found!');
     };

});

router.get('/edit/:movieId',isAuth, async (req,res) => {

     const userId = req.user._id;
     try {
          const currentMovie = await movieService.getOne(req.params.movieId,userId);
          
          res.json(currentMovie);

     } catch (error) {

          res.status(403).json(error);
     }

});

router.put('/:movieId',isAuth, async (req,res) => {

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

     const userId = req.user._id;
     
     try {
          
          const updatedMovie = await movieService.update(req.params.movieId, movieData, userId);
          
          res.json(updatedMovie);

     } catch (error) {
          res.status(403).json(error);
     }


});

router.delete('/:movieId',isAuth, async (req,res) => {

     try {
          const userId = req.user._id;

          await movieService.delete(req.params.movieId,userId);
          
          res.send('Movie Deleted!')
     } catch (error) {
          res.status(403).json(error);
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
          
          res.status(400).json({error});

     }

});

router.post('/comment/:movieId',isAuth, async (req,res) => {

     try {
          const userId = req.user._id;
          const { comment } = req.body;

          console.log(userId, comment);

          const movie = await movieService.comment(req.params.movieId, userId, comment);
           
          res.json(movie);

     } catch (error) {
          
          res.status(400).json({error});

     }

});


module.exports = router;