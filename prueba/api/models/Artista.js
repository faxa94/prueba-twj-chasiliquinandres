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
      require: true,
      size: 20
    },
    estilo: {
      type: 'string',
      require: true,
      size: 20
    },
    paisResidencia: {
      type: 'string',
      require: true,
      enum: ['Ecuador', 'Uruguay', 'Brasil', 'Argentina', 'Peru', 'Colombia']
    },
    idAlbum: {
      model: 'Album',
      required: true
    }
  }
};

