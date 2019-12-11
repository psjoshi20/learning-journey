'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Users', [{
      id:'1',//	integer Auto Increment [nextval('"Users_id_seq"')]	
      name:'John DOe',		
      username:'Jd',	
      email:'demo@demo.com',	 
      password:'password',// NULL	
      createdAt: new Date(),
      updatedAt: new Date()
           }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
   
  }
};

