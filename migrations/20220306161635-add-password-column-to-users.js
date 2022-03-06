'use strict';
const { DataTypes } = require('sequelize')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.addColumn('User', 'password', {
     type: DataTypes.STRING});
     
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
