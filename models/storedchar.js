'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class storedChar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  storedChar.init({
    class: DataTypes.TEXT,
    classProfTool: DataTypes.TEXT,
    classProfArm: DataTypes.TEXT,
    classProfWeap: DataTypes.TEXT,
    saveThrow: DataTypes.TEXT,
    hitDie: DataTypes.TEXT,
    hp: DataTypes.TEXT,
    profSkills: DataTypes.TEXT,
    spellcastAbil: DataTypes.TEXT,
    equipment: DataTypes.TEXT,
    race: DataTypes.TEXT,
    size: DataTypes.TEXT,
    asi: DataTypes.TEXT,
    speed: DataTypes.INTEGER,
    lang: DataTypes.TEXT,
    vision: DataTypes.TEXT,
    trait: DataTypes.TEXT,
    traitDesc: DataTypes.TEXT,
    backgroundId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    height: DataTypes.TEXT,
    eyes: DataTypes.TEXT,
    hair: DataTypes.TEXT,
    bioDesc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'storedChar',
  });
  return storedChar;
};