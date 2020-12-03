'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  classes.init({
    name: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    hitDice: DataTypes.TEXT,
    firstLevelHp: DataTypes.TEXT,
    moreLevelHp: DataTypes.TEXT,
    profArmor: DataTypes.TEXT,
    profWeapons: DataTypes.TEXT,
    profTools: DataTypes.TEXT,
    profSaveThrow: DataTypes.TEXT,
    profSkills: DataTypes.TEXT,
    equipment: DataTypes.TEXT,
    spellcastingAbil: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'classes',
  });
  return classes;
};