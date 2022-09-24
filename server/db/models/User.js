const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    todos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Todo"
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isLoggedIn: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("User", userSchema)