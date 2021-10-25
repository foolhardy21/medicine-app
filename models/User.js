const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model(userSchema, 'User')

module.exports = User