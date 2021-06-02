const films = require("../utils/films")
const apiKey = require ("../config")

const routers = {
    getfilm: async(req, res) => {
        let title = req.params.title
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        res.status(200).render('film', data)
    },
    postfilm: async(req, res) => {
        let title = req.params.title
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        res.status(200).render('film', data)
    },
    putfilm: async(req, res) => {
        let title = req.params.title
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        res.status(200).render('film', data)
    },
    deletefilm: async(req, res) => {
        let title = req.params.title
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        res.status(200).render('film', data)
    },


}

module.exports = routes;

