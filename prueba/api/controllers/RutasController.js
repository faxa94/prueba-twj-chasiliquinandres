/**
 * RutasController
 *
 * @description :: Server-side logic for managing rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    home: function (req, res) {
        return res.view('Inicio/home')
    },
    crearAlbum: function (req, res) {
        return res.view('Album/crearAlbum');
    },
    listarAlbum: function (req, res) {
        Album.find().exec(function (error, encontrados) {
            if (error) return res.serverError()
            return res.view('Album/listarAlbum', { album: encontrados })
        });
    },
    editarAlbum: function (req, res) {
        var parametros = req.allParams();
        Album.findOne({ nombre: parametros.nombre }).exec(function (error, encontrados) {
            if (error)
                return res.serverError()
            return res.view('Album/editarAlbum', { album: encontrados })
        });
    },
    crearArtista: function (req, res) {
        Album.find().exec(function (error, encontrados) {
            if (error) return res.serverError()
            return res.view('Artista/crearArtista', { album: encontrados })
        });
    },
    listarArtista: function (req, res) {
        Artista.find().exec(function (error, encontrados) {
            if (error) return res.serverError()
            return res.view('Artista/listarArtista', { artista: encontrados })
        });
    },
    editarArtista: function (req, res) {
        var parametros = req.allParams();
        console.log(parametros);
        Artista.findOne({ id: parametros.id }).exec(function (error, artistaEncontrados) {
            Album.find().exec(function (error, albumEncontrados) {
                if (error) return res.serverError();
                console.log(artistaEncontrados);
                return res.view('Artista/editarArtista', { album: albumEncontrados, artista:artistaEncontrados })
            });
        });
    }
};

