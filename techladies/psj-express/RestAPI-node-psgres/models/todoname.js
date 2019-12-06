'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todoname = sequelize.define('Todoname',
   {
    title: {  
      type: DataTypes.STRING,
      allowNull:false,
    },
   } );
  Todoname.associate = (models) => {
    Todoname.hasmany(models.Todo, {
      foreignkey: 'TodoId',
      as: 'Todo',
    }) ;// associations can be defined here
  };
  return Todoname;
};
