'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      asiDesc: {
        type: Sequelize.TEXT
      },
      asiEffect: {
        type: Sequelize.INTEGER
      },
      asiTarget: {
        type: Sequelize.TEXT
      },
      speed: {
        type: Sequelize.INTEGER
      },
      lang: {
        type: Sequelize.TEXT
      },
      vision: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('races');
  }
};