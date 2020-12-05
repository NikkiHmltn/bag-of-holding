'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class featJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  featJoin.init({
    storedCharId: DataTypes.INTEGER,
    featId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'featJoin',
  });
  return featJoin;
};