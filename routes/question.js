const Router = require('express')
const { questionPost, questionGet } = require('../controllers/question')

const router = Router()

router.get('/', questionGet)
router.post('/', questionPost)

module.exports = router
