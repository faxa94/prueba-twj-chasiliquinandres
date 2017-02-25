/**
 * Album.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true,
      primaryKey: true,
      unique: true
    },
    fechaLanzamiento: {
      type: 'string',
      required: true,
    },
    urlPortada: {
      type: 'string',
      required: true,
    },
    artista: {
      collection: 'Artista',
      via: 'idAlbum'
    }
  }
};

