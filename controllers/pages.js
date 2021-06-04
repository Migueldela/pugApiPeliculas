const films = require('../utils/films');
require('dotenv').config();
let apiKey = process.env.API_KEY

const routes = {
    home: (req, res) => {
        res.status(200).render('home')
    },
    film: async(req, res) => {
        let title = req.params.title
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`)
        res.status(200).render('film', data)
    },
    post: (req, res) => {
        let title = req.body.title
        res.status(200).redirect(`film/${title}`);
    }
}

module.exports = routes