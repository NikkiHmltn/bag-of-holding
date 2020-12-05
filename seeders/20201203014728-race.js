'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('races', [{
    name: "Dwarf",
    size: "Medium",
    asiDesc:"Your Constitution score increases by 2." ,
    asiEffect: 2,
    asiTarget: "CON",
    speed: 25,
    lang: "Common, Dwarvish" ,
    vision: "Darkvision",
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: "Elf",
    size: "Medium",
    asiDesc: "Your Dexterity score increases by 2.",
    asiEffect: 2,
    asiTarget: "DEX",
    speed: 30,
    lang: "Common, Elvish",
    vision: "Darkvision",
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: "Halfling",
    size: "Small",
    asiDesc: "Your Dexterity score increases by 2.",
    asiEffect: 2,
    asiTarget: "DEX",
    speed: 25,
    lang: "Common, Halfling",
    vision: null ,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: "Human",
    size: "Medium",
    asiDesc: "Your ability scores each increase by 1.",
    asiEffect: 1,
    asiTarget: "STR, DEX, CON, WIS, INT, CHA",
    speed: 30,
    lang: "Common, one of your choice",
    vision: null,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    name: "Dragonborn",
    size: "Medium",
    asiDesc: "Your Strength score increases by 2, and your Charisma score increases by 1.",
    asiEffect: 2,
    asiTarget: "STR, CHA",
    speed: 30,
    lang: "Common, Draconic",
    vision: null ,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
   name: "Gnome" ,
    size: "Small",
    asiDesc: "Your Intelligence score increases by 2.",
    asiEffect: 2,
    asiTarget: "INT",
    speed: 25,
    lang: "Common, Gnomish",
    vision: "Darkvision",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Half-Elf" ,
    size: "Medium",
    asiDesc: "Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.",
    asiEffect: 1,
    asiTarget: "CHA, Two of your choice",
    speed: 30,
    lang: "Common, Elvish, Choice",
    vision: "Darkvision",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Half-Orc",
    size: "Medium",
    asiDesc: "Your Strength score increases by 2, and your Constitution score increases by 1.",
    asiEffect: 2,
    asiTarget: "STR, CON",
    speed: 30,
    lang: "Common, Orc",
    vision: "Darkvision",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Tiefling",
    size: "Medium",
    asiDesc: "Your Intelligence score increases by 1, and your Charisma score increases by 2.",
    asiEffect: 2,
    asiTarget: "CHA, INT",
    speed: 30,
    lang: "Common, Infernal",
    vision: "Darkvision",
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
