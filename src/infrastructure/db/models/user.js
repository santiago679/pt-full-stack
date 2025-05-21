'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) { }
  }

  User.init({
    id: { 
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true 
    },
    dni: { 
      type: DataTypes.STRING(10), 
      allowNull: false, 
      unique: true 
    },
    fullName: { 
      type: DataTypes.STRING(100), 
      allowNull: false 
    },
    age: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    phone: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    email: { 
      type: DataTypes.STRING(100), 
      allowNull: false 
    },
    gender: 
    { 
      type: DataTypes.STRING(10), 
      allowNull: false 
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'User',
  });
  return User;
};