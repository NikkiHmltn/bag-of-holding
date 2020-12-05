'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('spells', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.TEXT
      },
      level: {
        type: Sequelize.TEXT
      },
      castTime: {
        type: Sequelize.TEXT
      },
      range: {
        type: Sequelize.TEXT
      },
      components: {
        type: Sequelize.TEXT
      },
      duration: {
        type: Sequelize.TEXT
      },
      desc: {
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
    await queryInterface.dropTable('spells');
  }
};