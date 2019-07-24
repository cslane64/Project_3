'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locality = sequelize.define('Locality', {
    localityName: DataTypes.STRING,
    Abbr: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  Locality.associate = function(models) {
    // associations can be defined here
  };
  return Locality;
};