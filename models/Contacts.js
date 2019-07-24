'use strict';
module.exports = (sequelize, DataTypes) => {
  const contacts = sequelize.define('contacts', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING
  }, {});
  contacts.associate = function(models) {
    // associations can be defined here
  };
  return contacts;
};