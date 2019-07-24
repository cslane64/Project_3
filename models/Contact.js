'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING
  }, {});
  Contact.associate = function(models) {
    // contact belongs to a locality
    Contact.belongsTo(models.Locality);
  };
  return Contact;
};