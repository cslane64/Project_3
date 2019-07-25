'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.belongsTo(models.Locality);
  };
  return Contact;
};