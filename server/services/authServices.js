// bcrypt = use to can not display password in database
const bcrypt = require('bcrypt');
const  jwt = require("jsonwebtoken");
const {JWT_SECRET} =  require("../config/envConfig");


module.exports.hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}

// comparePassword 
module.exports.comparePassword = async (password, dbpassword) => {
    return await bcrypt.compare(password, dbpassword);
}

module.exports.createToken = (user) => {

    return jwt.sign(user, JWT_SECRET, {
     // how many time token validated (7-days)
        expiresIn: '7d'
    })
}