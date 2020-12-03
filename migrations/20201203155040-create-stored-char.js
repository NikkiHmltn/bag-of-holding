'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('storedChars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      classId: {
        type: Sequelize.INTEGER
      },
      raceId: {
        type: Sequelize.INTEGER
      },
      abilityScoreId: {
        type: Sequelize.INTEGER
      },
      backgroundId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      age: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.TEXT
      },
      eyes: {
        type: Sequelize.TEXT
      },
      hair: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.TEXT
      },
      bioDesc: {
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
    await queryInterface.dropTable('storedChars');
  }
};