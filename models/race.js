'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.race.hasMany(models.storedChar)
    }
  };
  race.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    asiDesc: DataTypes.TEXT,
    asiEffect: DataTypes.INTEGER,
    asiTarget: DataTypes.TEXT,
    speed: DataTypes.INTEGER,
    lang: DataTypes.TEXT,
    vision: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'race',
  });
  return race;
};