const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    passwordHash: {
        type: String 
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    contact: {
        type: Number
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    collection_requests : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Collector"
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User