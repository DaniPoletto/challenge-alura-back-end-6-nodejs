'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.hasMany(models.Adoptions, {
        foreignKey: 'pet_id'
      })
      Pets.belongsTo(models.Shelters, {
        foreignKey: 'shelter_id'
      })
    }
  }
  Pets.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    adopted: DataTypes.BOOLEAN,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};