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
      models.storedChar.belongsTo(models.user)
      models.storedChar.belongsTo(models.classes)
      models.storedChar.belongsTo(models.race)
      models.storedChar.belongsTo(models.background)
    }
  };
  storedChar.init({
    classesId: DataTypes.INTEGER,
    raceId: DataTypes.INTEGER,
    backgroundId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    height: DataTypes.TEXT,
    eyes: DataTypes.TEXT,
    hair: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    bioDesc: DataTypes.TEXT,
    STR: DataTypes.INTEGER,
    DEX: DataTypes.INTEGER,
    CON: DataTypes.INTEGER,
    INT: DataTypes.INTEGER,
    WIS: DataTypes.INTEGER,
    CHA: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'storedChar',
  });
  return storedChar;
};