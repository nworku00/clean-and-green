'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MultiPurpose extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MultiPurpose.init({
    name: DataTypes.STRING,
    ingredients: DataTypes.ARRAY(DataTypes.STRING),
    recipe: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MultiPurpose',
  });
  return MultiPurpose;
};