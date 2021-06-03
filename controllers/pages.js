const films = require('../utils/films');
require('dotenv').config();
let apiKey = process.env.API_KEY


const routes = {
    home: (req, res) => {
        res.status(200).render('home')
    },
    film: async(req, res) => {
        let title = req.params.title //Requerir la información del título
        
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        res.status(200).render('film', data)
    },
    post: async(req, res) => {
        let title = req.body.title //obtener valores que envía a nuestro formulario
        res.status(200).redirect(`film/${title}`);
    }
}

module.exports = routes