const Router = require("express");
const router = Router();
const {addChats,getChats} = require('../controllers/chatCntrl')
const validateToken = require('../middlewares/validateToken');

router.route('/').post(addChats);
router.route('/:id/emergncye/:emerg').get(getChats);



module.exports = router;