const Movie = require('../models/Movie');
const User = require('../models/User');

exports.getAll = () => Movie.find();

exports.create = (movieItam) => Movie.create(movieItam);

exports.getOneDetailed = (movieId) => Movie.findById(movieId);

exports.getOne = (movieId) => Movie.findById(movieId);

exports.update = (movieId,movieData) => Movie.findByIdAndUpdate(movieId,movieData);

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);

exports.like = async (movieId) => {
    
    const movie = await Movie.findById(movieId);
    const user = await User.findById(userId);

    movie.likes.push(user);
    movie.countLikes += 1;

    user.likedMovies.push(movie);

    movie.save();
    user.save();

    return movie;
    
}
