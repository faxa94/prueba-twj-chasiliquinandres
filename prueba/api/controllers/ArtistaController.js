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
                if (error) return res.view('error', {
                    error: {
                        descripcion: 'No se completo la operacion Crear nuevo artista' + error,
                        url: '/nuevoArtista'
                    }
                });
                sails.log.info(artistaCreado);
                return res.view('Inicio/home');
            })
        } else {
            return res.view('error', {
                error: {
                    descripcion: 'Metodo no permitido',
                    url: '/nuevoArtista'
                }
            });
        }
    },
    editarArtista: function (req, res) {
        let parametros = req.allParams();
        console.log('Proceso de Actualizacion');
        if (req.method == 'POST') {
            Artista.update(
                { id: parametros.id },
                {
                    nombre: parametros.nombre,
                    estilo: parametros.estilo,
                    paisResidencia: parametros.paisResidencia,
                    idAlbum: parametros.idAlbum
                }
            ).exec(function (error, artistaActualizado) {
                if (error) return res.view('error', {
                    error: {
                        descripcion: 'No se completo la operacion Editar artista' + error,
                        url: '/editarArtista'
                    }
                });
                sails.log.info(artistaActualizado);
                return res.view('Inicio/home');
            });
        } else {
            return res.view('error', {
                error: {
                    descripcion: 'Metodo no permitido' + error,
                    url: '/editarArtista'
                }
            });
        }
    }
};

