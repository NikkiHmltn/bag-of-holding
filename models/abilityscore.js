'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class abilityScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  abilityScore.init({
    charId: DataTypes.INTEGER,
    STR: DataTypes.INTEGER,
    DEX: DataTypes.INTEGER,
    CON: DataTypes.INTEGER,
    INT: DataTypes.INTEGER,
    WIS: DataTypes.INTEGER,
    CHA: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'abilityScore',
  });
  return abilityScore;
};