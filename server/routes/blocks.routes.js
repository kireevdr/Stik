const {Router} = require('express')
const {index} = require('../controllers/blocks.controller')
const router = Router()


router.get('/', index)

module.exports = router
