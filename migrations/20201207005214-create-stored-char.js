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
      classesId: {
        type: Sequelize.INTEGER
      },
      raceId: {
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
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('storedChars');
  }
};