const router = require('express').Router()
const pages = require('./pages')

router.get('/', pages.home)
router.get('/film/:title', pages.film)
router.post('/film', pages.post)
router.get('*', pages.page404)

module.exports = router