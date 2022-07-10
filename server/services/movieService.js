const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();