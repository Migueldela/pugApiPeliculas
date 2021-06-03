const fetch = require('node-fetch')

const peli = {
    getPelicula: async(url) => {
        let response = await fetch(url)
        let film = await response.json()
        return film
    },
    /* postPelicula: async(url) => {
        let response = await fetch(url)
        let film = await response.json()
        return film
    },
    putPelicula: async(url) => {
        let response = await fetch(url)
        let film = await response.json()
        return film
    },
    deletePelicula: async(url) => {
        let response = await fetch(url)
        let film = await response.json()
        return film
    }
 */
}

module.exports = peli