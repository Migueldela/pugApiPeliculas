const films = require("../utils/films")
require('dotenv').config();
let apiKey = process.env.API_KEY || "&apikey=f736ee74"

const routers = {
    getfilm: async(req, res) => {
        let title = req.params.title
        console.log(`http://www.omdbapi.com/?t=${title}${apiKey}`)

        let data = await films.getPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        console.log(data)
        if (data.Response == "False") {
            res.status(500).json({ error: 500, message: `Película no encontrada ${apiKey}` })
        } else {
            res.status(200).json(data)
        }
    },
    postfilm: async(req, res) => {
        // let data = await films.postPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        let nameF = req.body.Title
        res.status(200).json({ message: `Se ha guardado ${nameF}` });

    },
    putfilm: async(req, res) => {
        // let data = await films.putPelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)

        let nameF = req.body.Title
        let idF = req.body.imdbID
        res.status(200).json({ id: idF, message: `Se ha actualizado  ${nameF}` })
    },
    deletefilm: async(req, res) => {
        // let data = await films.deletePelicula(`http://www.omdbapi.com/?t=${title}${apiKey}`)
        let nameF = req.body.Title
        let idF = req.body.imdbID
        res.status(200).json({ id: idF, message: `Se ha borrado  ${nameF}` })
    },
    error: (req, res) => {
        res.status(404).json({ message: 'ruta ' + req.url + ' No encontrada.' })
    }
}

module.exports = routers;