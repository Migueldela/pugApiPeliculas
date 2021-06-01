const router = require('express').Router()
const pages = require('./pages')

router.get('/', pages.home)
//router.get('/film', pages.film)
//router.post('/', pages.)



module.exports= router