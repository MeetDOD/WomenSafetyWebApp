const asyncHandler = require('express-async-handler');
const {User} = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {generateverificationToken,sendVerificationEmail} = require('../utils/email');
const {successFullVerification,gmailContent} = require('../utils/emailTemplate')

const userInfo = asyncHandler(async (req,res) => {
    res.json(req.user);
});

const registerUser = asyncHandler(async(req,res)=>{
    const {uname, email, password, phone,emergencyNo, emergencyMail, pincode} = req.body;
    console.log(uname)
    if(!uname || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory baby");
    }

    const userAvailable = await User.findOne({email: email});
    if(userAvailable){
        res.status(400).json({message: "Email already exists"});
        
    }
    
    const verificationToken = generateverificationToken(email);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.create({
        uname,
        email,
        password: hashedPassword,
        verificationToken,
        phoneNo: phone,
        emergencyMail,
        emergencyNo,
        pinCode: pincode

    });

    await sendVerificationEmail(email, verificationToken);


    if(user){
        res.status(201).json({message: "User registered successfully"});
    }else{
        res.status(500);
        throw new Error("Something went wrong");
    }
});

const verifyemail = async (req, res) => {
    try {
        const tokenId = req.params.tokenId;
        const user = await User.findOne({ verificationToken: tokenId });

        if (!user) {
            return res.status(404).json({ error: 'Invalid verification token.' });
        }

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        const congratulationContent = successFullVerification();

        res.status(200).send(congratulationContent);

    } catch (error) {
        res.status(500).json({ error: 'An error occurred during email verification.' });
        console.log(error);
    }
};

const loginUser  = asyncHandler(async (req,res) => {
    const {email, password, phoneNo} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({email: email});
    
    if(!user){


        res.status(404);
        throw new Error(`User with this ${email} does not exist`);
    }
    if(!user.isVerified){
        res.status(403).json({message: "Your email is not verified"})
        return
    }
    

    if(user && await bcrypt.compare(password, user.password)){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user._id
            }
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1yr"});
        res.status(200).json({user: user, token: accessToken});
    }else{
        res.status(400);
        throw new Error("Password is not valid");
    }

});

const profileUpdate = asyncHandler(async(req,res) => {
    const {uid,uname,email,phoneNo,address,pincode,emergencyMail,emergencyNo,extraEmail1,extraEmail2,extraPhone1,extraPhone2} = req.body;
    const user = await User.findById(uid);
    if(user){
        user.uname = uname,
        user.email = email,
        user.phoneNo = phoneNo,
        user.address = address,
        user.pinCode = pincode,
        user.emergencyMail = emergencyMail,
        user.emergencyNo = emergencyNo,
        user.extraEmail1 = extraEmail1,
        user.extraEmail2 = extraEmail2,
        user.extraPhone1 = extraPhone1,
        user.extraPhone2 = extraPhone2

        await user.save()
        res.status(200).json({message: "User updated successfully"})
    }else{
        res.status(404).json({message: "Something went wrong"})
    }
     
})







       



module.exports = {
    userInfo,
    registerUser,
    loginUser,
    verifyemail,
    profileUpdate

}