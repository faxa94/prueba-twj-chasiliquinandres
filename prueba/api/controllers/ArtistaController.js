/**
 * ArtistaController
 *
 * @description :: Server-side logic for managing artistas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    crearArtista: function (req, res) {
        let parametros = req.allParams();
        console.log(parametros);
        if (req.method == 'POST') {
            Artista.create({
                nombre: parametros.nombre,
                estilo: parametros.estilo,
                paisResidencia: parametros.paisResidencia,
                idAlbum: parametros.idAlbum
            }).exec(function (error, artistaCreado) {
                if (error) return res.serverError();
                sails.log.info(artistaCreado);
                return res.view('Inicio/home');
            })
        } else {
              console.log('metodo no permitido');
        }
    },
};

