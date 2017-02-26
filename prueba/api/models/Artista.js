/**
 * Artista.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true,
      size: 20
    },
    estilo: {
      type: 'string',
      required: true,
      size: 20
    },
    paisResidencia: {
      type: 'string',
      required: true,
      enum: ['Ecuador', 'Uruguay', 'Brasil', 'Argentina', 'Colombia']
    },
    idAlbum: {
      model: 'Album',
      required: true
    }
  }
};

