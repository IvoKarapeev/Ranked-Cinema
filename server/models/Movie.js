const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    imageUrl:{
        type: String,
        required:true,
    },
    actors:{
        type: String,
        required:true,
    },
    author:{
        type: String,
        required:true,  
    },
    likes:[{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    creator:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;