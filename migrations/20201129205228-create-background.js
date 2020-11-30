'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('backgrounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.TEXT
      },
      skillProf: {
        type: Sequelize.STRING
      },
      toolProf: {
        type: Sequelize.STRING
      },
      lang: {
        type: Sequelize.STRING
      },
      equipment: {
        type: Sequelize.TEXT
      },
      feat: {
        type: Sequelize.STRING
      },
      featDesc: {
        type: Sequelize.TEXT
      },
      placeholder: {
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
    await queryInterface.dropTable('backgrounds');
  }
};