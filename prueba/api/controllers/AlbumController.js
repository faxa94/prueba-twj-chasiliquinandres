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
                if (error) return res.view('error', {
                    error: {
                        descripcion: 'No se completo la operacion Crear nuevo album' + error,
                        url: '/nuevoAlbum'
                    }
                });
                sails.log.info(albumCreado);
                return res.view('Inicio/home');
            })
        } else {
            return res.view('error', {
                error: {
                    descripcion: 'Metodo no permitido',
                    url: '/nuevoAlbum'
                }
            });
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
                if (error) return res.view('error', {
                    error: {
                        descripcion: 'No se completo la operacion Editar album' + error,
                        url: '/editarAlbum'
                    }
                });
                sails.log.info(albumActualizado);
                return res.view('Inicio/home');
            });
        } else {
            return res.view('error', {
                error: {
                    descripcion: 'Metodo no permitido',
                    url: '/editarAlbum'
                }
            });
        }
    }
};

