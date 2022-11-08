const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    username: {type: String, unique: true },
    password: {type: String},
    img: {type: String},
},{timestamps: true},)


module.exports = mongoose.model('User', UserSchema);