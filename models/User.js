'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
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