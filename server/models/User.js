const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    secondName:{
        type: String,
        required:true,
    },
    username:{
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true
    },
    likedMovies: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const User = mongoose.model('User',userSchema);

module.exports = User;