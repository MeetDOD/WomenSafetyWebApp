const mongoose = require("mongoose");

const EmergencySchema = mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    emergencyLctOnMap:{
        type:String,
    },
    addressOfIncd:{
        type:String
    },
    isResolved:{
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const Emergency = mongoose.model("Emergency", EmergencySchema);
module.exports = {Emergency}