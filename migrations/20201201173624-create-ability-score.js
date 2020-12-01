'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('abilityScores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      charId: {
        type: Sequelize.INTEGER
      },
      STR: {
        type: Sequelize.INTEGER
      },
      DEX: {
        type: Sequelize.INTEGER
      },
      CON: {
        type: Sequelize.INTEGER
      },
      INT: {
        type: Sequelize.INTEGER
      },
      WIS: {
        type: Sequelize.INTEGER
      },
      CHA: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('abilityScores');
  }
};