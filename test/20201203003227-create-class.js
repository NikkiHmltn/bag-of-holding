'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      desc: {
        type: Sequelize.TEXT
      },
      hitDice: {
        type: Sequelize.TEXT
      },
      firstLevelHp: {
        type: Sequelize.TEXT
      },
      moreLevelHp: {
        type: Sequelize.TEXT
      },
      profArmor: {
        type: Sequelize.TEXT
      },
      profWeapons: {
        type: Sequelize.TEXT
      },
      profTools: {
        type: Sequelize.TEXT
      },
      profSaveThrow: {
        type: Sequelize.TEXT
      },
      profSkills: {
        type: Sequelize.TEXT
      },
      equipment: {
        type: Sequelize.TEXT
      },
      spellcastingAbil: {
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
    await queryInterface.dropTable('classes');
  }
};