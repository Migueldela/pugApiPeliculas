const films = require("../utils/films")
const apiKey = require ("../config")

const routers = {
    getfilm: async(req, res) => {
        let title = req.params.title
        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        res.status(200).json(data)
    },
    postfilm: async(req, res) => {
        let nameF =req.body.Title
        res.status(200).json({message: `Se ha guardado ${nameF}`});
        
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

module.exports = routers;

