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
    asiDesc:"**_Ability Score Increase._** Your Constitution score increases by 2." ,
    asiEffect: 2,
    asiTarget: "CON",
    speed: 25,
    lang: "Common, Dwarvish" ,
    vision: "Darkvision",
   },
   {
    name: "Elf",
    size: "Medium",
    asiDesc: "**_Ability Score Increase._** Your Dexterity score increases by 2.",
    asiEffect: 2,
    asiTarget: "DEX",
    speed: 30,
    lang: "Common, Elvish",
    vision: "Darkvision",
   },
   {
    name: "Halfling",
    size: "Small",
    asiDesc: "**_Ability Score Increase._** Your Dexterity score increases by 2.",
    asiEffect: 2,
    asiTarget: "DEX",
    speed: 25,
    lang: "Common, Halfling",
    vision: null ,
   },
   {
    name: "Human",
    size: "Medium",
    asiDesc: "**_Ability Score Increase._** Your ability scores each increase by 1.",
    asiEffect: 1,
    asiTarget: "STR, DEX, CON, WIS, INT, CHA",
    speed: 30,
    lang: "Common, one of your choice",
    vision: null,
   },
   {
    name: "Dragonborn",
    size: "Medium",
    asiDesc: "**_Ability Score Increase._** Your Strength score increases by 2, and your Charisma score increases by 1.",
    asiEffect: 2,
    asiTarget: "STR, CHA",
    speed: 30,
    lang: "Common, Draconic",
    vision: null ,
   },
   {
   name: "Gnome" ,
    size: "Small",
    asiDesc: "**_Ability Score Increase._** Your Intelligence score increases by 2.",
    asiEffect: 2,
    asiTarget: "INT",
    speed: 25,
    lang: "Common, Gnomish",
    vision: "Darkvision",
  },
  {
    name: "Half-Elf" ,
    size: "Medium",
    asiDesc: "**_Ability Score Increase._** Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.",
    asiEffect: 1,
    asiTarget: "CHA, Choice, Choice",
    speed: 30,
    lang: "Common, Elvish, Choice",
    vision: "Darkvision",
  },
  {
    name: "Half-Orc",
    size: "Medium",
    asiDesc: "**_Ability Score Increase._** Your Strength score increases by 2, and your Constitution score increases by 1.",
    asiEffect: 2,
    asiTarget: "STR, CON",
    speed: 30,
    lang: "Common, Orc",
    vision: "Darkvision",
  },
  {
    name: "Tiefling",
    size: "Medium",
    asiDesc: "**_Ability Score Increase._** Your Intelligence score increases by 1, and your Charisma score increases by 2.",
    asiEffect: 2,
    asiTarget: "CHA, INT",
    speed: 30,
    lang: "Common, Infernal",
    vision: "Darkvision",
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
