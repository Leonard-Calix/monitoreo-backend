'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Questions.hasMany(models.Poll)

    }
  }
  Questions.init({
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    recommendation: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Questions;
};