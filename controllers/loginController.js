const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.postUser = async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const age = req.body.age
    const gender = req.body.gender
    const contact = req.body.contact
    const name = req.body.name
    const address = req.body.address
    
    const hash = await bcrypt.hash(password, 10)
    
    const user = new User({
        username: username,
        passwordHash: hash,
        age,
        gender,
        contact,
        name,
        address
    })
    await user.save(function(err, result) {
        if(err) {
            console.error(err)
        } else {
            res.send(result)
        }
    })
}

exports.verifyUser = async function (req, res) {
    const response = await User.findOne({username: req.body.username})
    if(response) {
        const passResponse = await bcrypt.compare(req.body.password, response.passwordHash)
        if(passResponse) {
            res.send(response._id)
        } else {
            res.send('invalid password')
        }
    } else {
        res.send("invalid username")
    }
    res.end()
}

exports.getUserDetails = async function(req, res) {
    const id = req.body.id
    const response = await User.findById(id)
    
    res.send(response)
}