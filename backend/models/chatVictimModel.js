const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema({


    sender:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    },

    receiver: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    textChat: {
        type: String,
        required: [true,"message is required"]
    },
    
    emergency: {
        type: mongoose.Types.ObjectId,
        ref: "Emergency"
    }
});

const Chat = mongoose.model('Chat',ChatSchema);
module.exports = {Chat}