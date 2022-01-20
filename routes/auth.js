const  Router =require('express');
const { avatarPost, avatarGet } = require('../controllers/avatar');
const router =  Router();

//rutas
router.get('/',avatarGet)
router.post('/',avatarPost)

module.exports = router;
