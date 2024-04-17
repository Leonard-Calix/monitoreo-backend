'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Survey.belongsTo(models.User)
      Survey.belongsTo(models.Community)
      Survey.hasMany(models.Poll)
    }
  }
  Survey.init({
    recomendation: DataTypes.STRING,
    monitoringDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Survey',
  });
  return Survey;
};