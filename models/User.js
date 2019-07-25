'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    locality: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // contact belongs to a locality
    User.belongsTo(models.Locality);
  };
  return User;
};