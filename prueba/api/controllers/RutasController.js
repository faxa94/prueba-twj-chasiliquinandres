/**
 * RutasController
 *
 * @description :: Server-side logic for managing rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crearAlbum: function(req,res){
        return res.view('Album/crearAlbum');
    }
};

