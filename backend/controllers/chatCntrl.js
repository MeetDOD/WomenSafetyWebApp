const asyncHandler = require('express-async-handler');
const { User } = require('../models/userModel');
const {Chat} = require('../models/chatVictimModel')
const {Emergency} = require('../models/emergencyModel')


const addChats = asyncHandler(async(req,res) => {

    const {senderId, receiverId, text, emergId} = req.body;

    const sender = await User.findById(senderId);
    const emerg = await Emergency.findById(emergId);
    if(sender){
        const receiver = await User.findById(receiverId);
        if(receiver){
            const newChat = await Chat.create({
                sender: senderId,
                receiver: receiverId,
                textChat: text,
                emergency: emergId
            });
            if(newChat){
                res.status(201).json({message: "Message sent successfully"});
            }
        }
    }

});

const getChats = asyncHandler(async(req,res) => {

    const receiver = req.params.id;
    const emerg = req.params.emerg;
    const chats = await Chat.find({receiver: receiver, emergency:emerg});
    if(chats){
        res.status(200).json(chats)

    }else{
        res.status(204).json({message: "No content to show"})
    }
})


module.exports = {addChats,getChats}