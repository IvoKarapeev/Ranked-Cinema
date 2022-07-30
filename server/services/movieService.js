const Movie = require('../models/Movie');
const User = require('../models/User');

exports.getAll = () => Movie.find();

exports.create = async (movieItam,creator) =>{

    const user = await User.findById(creator._id)

    if (!movieItam.imageUrl.startsWith('http')) {
        throw{
            error:'The Movie image shoud start with http/https!'
        };
    };

    if (!movieItam.trailerUrl.startsWith('http')) {
        throw{
            error:'The Movie Trailer shoud start with http/https!'
        };
    };

    const movie = await Movie.create(movieItam);
    user.createdMovies.push(movie)

    user.save();

    return movie;
} 
exports.getOneDetailed = async (movieId) => {

    const movie = await Movie.findById(movieId);

    movie.views += 1;

    movie.save();

    return movie;
}

exports.getOne = async (movieId,userId) => {
 
    const movie = await Movie.findById(movieId).populate('creator');

    if (movie.creator._id != userId) {
        throw{
            error: 'You must be the owner the edit!'
        };
    };

    console.log(movie);

    return movie;

}

exports.update = async (movieId,movieData,userId) => {

    if (!movieData.imageUrl.startsWith('http')) {
            throw{
                error:'The Movie image shoud start with http/https!'
            };
    };

    if (!movieData.trailerUrl.startsWith('http')) {
        throw{
            error:'The Movie Trailer shoud start with http/https!'
        };
    };

    const movie = await Movie.findById(movieId).populate('creator');
    
    if (movie.creator._id != userId) {
        throw{
            error: 'You must be the owner the edit!'
        };
    };

    return await Movie.findByIdAndUpdate(movieId,movieData);
    
}

exports.delete = async (movieId,userId) => {
    
    const movie = await Movie.findById(movieId).populate('creator');
    
    if (movie.creator._id != userId) {
        throw{
            error: 'You must be the owner the delete!'
        };
    };


    return await Movie.findByIdAndDelete(movieId)
};

exports.comment = async (movieId,userId,comment) => {

    const movie = await Movie.findById(movieId);
    const user = await User.findById(userId);

    movie.comments.push({user:user,comment:comment});

    movie.save();

    return movie;

}

exports.getComments = async (movieId) =>{

    const movie = await Movie.findById(movieId).populate('comments');

    const comments = movie.comments;
    const usersId = comments.map(x => x.user);

    let users = [];
    
    const getUsers = async () => {
        await Promise.all(
            usersId.map(async (userId) => {
            const user = await User.findById(userId);

            users.push(user);
        }))
        
        return users;
    }
    
    await getUsers();

    return {
        comments,
        users
    };
}
