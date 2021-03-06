'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    localityID: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    //User.belongsTo(models.Locality);
  };
  return User;
};