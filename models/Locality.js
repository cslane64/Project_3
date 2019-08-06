'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locality = sequelize.define('Locality', {
    localityName: DataTypes.STRING,
    abbr: DataTypes.STRING,
    
  }, {});
  Locality.associate = function(models) {
    // locality hasMany contacts
    // locality hasMany users
    //Locality.hasMany(models.Contact);
    //Locality.hasMany(models.User);

  };
  return Locality;
};