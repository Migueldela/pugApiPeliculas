const fetch = require('node-fetch')

const peli = {
    getPelicula: async(url) => {
        let response = await fetch(url)
        let film = await response.json()
        return film
    }
}

module.exports = peli