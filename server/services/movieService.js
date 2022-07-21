const Movie = require('../models/Movie');
const User = require('../models/User');

exports.getAll = () => Movie.find();

exports.create = async (movieItam) =>{

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

    return await Movie.create(movieItam);

} 
exports.getOneDetailed = async (movieId) => {

    const movie = await Movie.findById(movieId);

    movie.views += 1;

    movie.save();

    return movie;
}

exports.getOne = (movieId) => Movie.findById(movieId);

exports.update = async (movieId,movieData) => {

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

    return await Movie.findByIdAndUpdate(movieId,movieData);
    
}

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);
