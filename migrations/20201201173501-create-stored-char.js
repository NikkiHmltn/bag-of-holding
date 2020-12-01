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
      class: {
        type: Sequelize.TEXT
      },
      classProfTool: {
        type: Sequelize.TEXT
      },
      classProfArm: {
        type: Sequelize.TEXT
      },
      classProfWeap: {
        type: Sequelize.TEXT
      },
      saveThrow: {
        type: Sequelize.TEXT
      },
      hitDie: {
        type: Sequelize.TEXT
      },
      hp: {
        type: Sequelize.TEXT
      },
      profSkills: {
        type: Sequelize.TEXT
      },
      spellcastAbil: {
        type: Sequelize.TEXT
      },
      equipment: {
        type: Sequelize.TEXT
      },
      race: {
        type: Sequelize.TEXT
      },
      size: {
        type: Sequelize.TEXT
      },
      asi: {
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
      trait: {
        type: Sequelize.TEXT
      },
      traitDesc: {
        type: Sequelize.TEXT
      },
      backgroundId: {
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