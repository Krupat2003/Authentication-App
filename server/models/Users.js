const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        require:true,
        type: String
    },
    email: {
        require:true,
        type: String
    },
    password: {
        require:true,
        type: String
    },
    city: {
        require:true,
        type: String
    },
    admin: {
        require:true,
        type: Boolean,
        default: false
    }
});

const UserModel = mongoose.model("join", UserSchema);
module.exports = UserModel;