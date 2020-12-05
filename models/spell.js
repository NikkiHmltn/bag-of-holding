'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  spell.init({
    name: DataTypes.TEXT,
    type: DataTypes.TEXT,
    level: DataTypes.TEXT,
    castTime: DataTypes.TEXT,
    range: DataTypes.TEXT,
    components: DataTypes.TEXT,
    duration: DataTypes.TEXT,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'spell',
  });
  return spell;
};