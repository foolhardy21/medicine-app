const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.postUser = async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const hash = await bcrypt.hash(password, 10)
    
    const user = new User({
        username: username,
        passwordHash: hash
    })
    await user.save(function(err, result) {
        if(err) {
            console.error(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
}

exports.verifyUser = async function (req, res) {
    const response = await User.findOne({username: req.body.username})
    if(response) {
        const passResponse = await bcrypt.compare(req.body.password, response.passwordHash)
        if(passResponse) {
            res.send('login successful')
        } else {
            res.send('invalid password')
        }
    } else {
        res.send("invalid username")
    }
    res.end()
}