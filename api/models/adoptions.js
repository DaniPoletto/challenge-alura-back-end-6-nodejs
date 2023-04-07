'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adoptions.belongsTo(models.Tutors, {
        foreignKey: 'tutor_id'
      })
      Adoptions.belongsTo(models.Pets, {
        foreignKey: 'pet_id'
      })
    }
  }
  Adoptions.init({
    date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Adoptions',
  });
  return Adoptions;
};