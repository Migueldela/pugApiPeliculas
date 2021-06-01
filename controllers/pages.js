const films = require('../utils/films');
const apiKey = require('../config')

const routes = {
    home: (req, res) => {
        res.status(200).render('home')
    },
    film: async(req, res) => {
        let title = req.params.title
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        res.status(200).render('film', data)
    },
    post: async(req, res) => {
        let title = req.body.title
        res.status(200).redirect(`film/${title}`);
    },
    page404: (req, res) => {
        res.status(200).render('404')
    },
}

module.exports = routes