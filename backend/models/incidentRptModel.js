const mongoose = require("mongoose");

const IncidentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    meidaSt: {
      type: String,
    },
    pincodeOfIncident: {
      type: String,

    },
    report:{
        type: String,
    },
    isSeen:{
        type: Boolean,
        default: false
    },
    address:{
      type: String
    }
},
    {timestamps: true}
);
const Incident = mongoose.model("Incident",IncidentSchema);
module.exports = {Incident}