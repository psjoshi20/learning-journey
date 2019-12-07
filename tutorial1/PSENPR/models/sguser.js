'use strict';
module.exports = (sequelize, DataTypes) => {
  const SgUser = sequelize.define('SgUser', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    user_info: DataTypes.JSON
  }, {});
  SgUser.associate = function(models) {
    // associations can be defined here
  };
  return SgUser;
};