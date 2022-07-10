const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

exports.create = (movieItam) => Movie.create(movieItam);
