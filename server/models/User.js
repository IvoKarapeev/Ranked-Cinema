const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minlength:[2,'The firstName should be at least 2 characters long']
    },
    secondName:{
        type: String,
        required:true,
        minlength:[2,'The secondName should be at least 2 characters long']
    },
    username:{
        type: String,
        required:true,
        minlength:[5,'The username should be at least 5 characters long']
    },
    password: {
        type: String,
        required:true
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;