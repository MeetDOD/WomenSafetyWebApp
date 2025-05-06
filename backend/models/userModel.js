const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    uname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: [true, "This email is already in use"],
    },
    profile: {
      type: String,
    },
    phoneNo: {
      type: String,
      unique: [true, "This phone number is already in use"],
    },
    password: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    city: {
      type: String,
    },
    emergencyNo: {
      type: Number,

    },
    emergencyMail: {
      type: String,
     
    },
    pinCode: {
      type: Number,
    },
    address: {
      type: String,
    },
    role: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
    extraphone1:{
      type: String
    },
    extraphone2:{
      type: String
    },
    extraEmail1:{
      type: String
    },
    extraEmail2:{
      type: String
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = { User, UserSchema };
