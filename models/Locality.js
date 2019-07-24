'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locality = sequelize.define('Locality', {
    localityName: DataTypes.STRING,
    Abbr: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  Locality.associate = function(models) {
    // locality hasMany users
    Locality.hasMany(models.User);

    Locality.hasMany(models.Contact);
  };
  return Locality;
};