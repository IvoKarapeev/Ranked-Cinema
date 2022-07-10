const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

exports.create = (movieItam) => Movie.create(movieItam);

exports.getOneDetailed = (movieId) => Movie.findById(movieId);

exports.getOne = (movieId) => Movie.findById(movieId);

exports.update = (movieId,movieData) => Movie.findByIdAndUpdate(movieId,movieData);

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);

