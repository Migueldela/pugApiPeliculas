const router = require('express').Router();
const films = require("./film")

router.get('/film/:title',films.getfilm)  //Se crea la ruta
router.post('/film', films.postfilm)
router.put('/film', films.putfilm)  //Se crea la ruta
router.delete('/film', films.deletefilm)

module.exports = router