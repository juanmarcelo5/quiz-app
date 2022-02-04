const Router = require('express')
const { avatarPost, avatarGet, avatarScoreUpdate } = require('../controllers/avatar')
const router = Router()

//rutas
router.get('/', avatarGet)
router.post('/', avatarPost)
router.put('/', avatarScoreUpdate)


module.exports = router
