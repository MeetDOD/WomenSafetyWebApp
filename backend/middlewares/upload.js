const path = require('path');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req,file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req,file, cb){
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext)
    }
});

var upload = multer({
    storage: storage,
    // fileFilter: function(req,file, cb){
    //     if(file.mimetype == "image/png" || file.mimetype == " image/jpg" ||
    //        file.mimetype == "image/jpeg"
    //       ){
    //         cb(null,true);
    //        }else{
    //             res.status(403);
    //             throw new Error("Only pdf,docx,zip,ppt,pptx,docx formats are allowed");
    //        }
    // },
    limits: {
        fileSize: 1024 * 1024 * 40
    }
});

module.exports = upload