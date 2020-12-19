const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    likes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    }],
    dislikes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    }],
    comments: [{
        text: {
            type: String,
            required: [true, "Please add a comment!"],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }],
});
module.exports = mongoose.model("post", postSchema);