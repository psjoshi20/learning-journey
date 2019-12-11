'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Books', [{
        id:'1',//	integer Auto Increment [nextval('"Books_id_seq"')]	
        title:'sequelize',	
        author:'manual',	
        description:'manual developed for seq',//	character varying(255)	
        quantity:'2',
        userId:'1',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Books', null, {});
    
    }
};
