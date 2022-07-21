const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:[2,'The Movie name should be at least 2 characters']
    },
    description:{
        type: String,
        required:true,
        minlength:[10,'The Description should be a at least 10 characters long.']
    },
    imageUrl:{
        type: String,
        required:true,
    },
    trailerUrl:{
        type: String,
        required:true,
    },
    actors:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
        enum:['Action','Comedy','Drama','Fantasy','Horror','Mystery','Romance','Thriller']
    },
    author:{
        type: String,
        required:true,  
    },
    creator:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true,  
    },
    comments:[{
        user: {
            type:mongoose.Types.ObjectId,
            ref:'User'
        },
        comment: String
    }],
    views:{
        type: Number
    }
});

const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;