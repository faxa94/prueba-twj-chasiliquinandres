/**
 * AlbumController
 *
 * @description :: Server-side logic for managing albums
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    crearAlbum: function (req, res) {
        let parametros = req.allParams();
        console.log(parametros);
        if (req.method == 'POST') {
            Album.create({
                nombre: parametros.nombre,
                fechaLanzamiento: parametros.fechaLanzamiento,
                urlPortada: parametros.urlPortada
            }).exec(function (error, albumCreado) {
                if (error) return res.serverError();
                sails.log.info(albumCreado);
                return res.view('Inicio/home');
            })

        } else {
            console.log('metodo no permitido');
        }
    },
    editarAlbum: function (req, res) {
        let parametros = req.allParams();
        console.log('Proceso de Actualizacion');
        if (req.method == 'POST') {
            Album.update(
                { nombre: parametros.nombre },
                {
                    fechaLanzamiento: parametros.fechaLanzamiento,
                    urlPortada: parametros.urlPortada
                }
            ).exec(function (error, albumActualizado) {
                if (error) return res.serverError();
                sails.log.info(albumActualizado);
                return res.view('Inicio/home');
            });


        } else {
            console.log('metodo no permitido');
        }
    }
};

