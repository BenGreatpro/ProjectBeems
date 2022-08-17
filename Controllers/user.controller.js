const User = require('../models/user.model')
const argon2 = require('argon2')
const jwt = require("jsonwebtoken")

const createUser = async (req, res) => {
    const {username, email} = req.body
    const password = await argon2.hash(req.body.password)
    
    const existingUser = await User.findOne({email})
    if (existingUser) {
       return res.status(409).json({message: "user already exist"})
      // res.redirect('/')
    } 

    try {
        const user = await User.create({
            username,
            email,
            password
        }) 
        return res.status(201).json(`Hello ${user.username}`)
    } catch (error) {
        return res.status(500).json({message: 'user creation failed' + error})
    }
}

const login = async (req, res) => {
    try {
    const {email, password} = req.body


const user = await User.findOne({email})
if (!user) {
    return res.status(404).json('invalid email')
}

const match = await argon2.verify(user.password, password)
if (match) {
    const token = jwt.sign({
        _id: user._id,
        email: user.email 
    },
    process.env.TOKEN_SECRET,{ expiresIn: "60s", }
    );
   return res.header('auth-token', token).send(token);
    //return res.json({user, token: token})
} else {
    return res.status(409).json('invalid password')
    }} catch (error) {
    console.log(error);
}
// if (!match) {
//     return res.status(409).json('invalid password')
// }

}






module.exports = {createUser, login}
