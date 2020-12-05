'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spellJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  spellJoin.init({
    spellId: DataTypes.INTEGER,
    classesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'spellJoin',
  });
  return spellJoin;
};