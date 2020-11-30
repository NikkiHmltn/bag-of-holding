'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class background extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  background.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    skillProf: DataTypes.STRING,
    toolProf: DataTypes.STRING,
    lang: DataTypes.STRING,
    equipment: DataTypes.TEXT,
    feat: DataTypes.STRING,
    featDesc: DataTypes.TEXT,
    placeholder: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'background',
  });
  return background;
};