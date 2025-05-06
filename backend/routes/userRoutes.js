const Router = require('express');
const router = Router();
const {Incident} = require('../models/incidentRptModel');
const {Emergency} = require('../models/emergencyModel');
const {User} = require('../models/userModel')
const {userInfo , registerUser, loginUser, verifyemail,profileUpdate} = require('../controllers/userCntrl');
const validateToken = require('../middlewares/validateToken');
router.route('/register').post(registerUser)
router.route('/login').post(loginUser);
router.route('/emailverify/:tokenId').get(verifyemail);
router.route('/get_user_info').get(validateToken, userInfo);
router.route('/update').put(profileUpdate)
router.route('/getselected').get(async(req,res) => {
    const data = [];
    const edata = [];
    const inci = await Incident.find({isSeen: true});
    const emer = await Emergency.find({isResolved: true});

    for(const x of inci){
        const user = await User.findById(x.user);
        if(user){
            data.push({
                uname: user.uname,
                address: x.address,
                pincode: x.pincodeOfIncident,
                report: x.report,
                isSeen: x.isSeen,
                image: x.meidaSt || "empty",
                createdAt: x.createdAt,
                updatedAt: x.updatedAt
            })
        }
    }

    for(const x of emer){
        const user = await User.findById(x.user);
        if(user){
        edata.push({
            _id: x._id,
            mapLct: x.emergencyLctOnMap,
            addressOfInc: x.addressOfIncd,
            username: user.uname,
            userId: user._id,
            emergencyNo: user.emergencyNo,
            isResolved: x.isResolved,
            createdAt: x.createdAt,
            updatedAt: x.updatedAt
        })
        }
    }

    res.status(200).json({incidents: data, emergency: edata});
})


module.exports = router;