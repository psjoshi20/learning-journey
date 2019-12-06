'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todoname = sequelize.define('Todoname', {
    title: DataTypes.STRING
  }, {});
  Todoname.associate = function(models) {
    // associations can be defined here
  };
  return Todoname;
};