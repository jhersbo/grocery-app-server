'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ lists, friends }) {
      this.hasMany(lists, {
        foreignKey: "list_id",
        as: "lists"
      })
      this.hasMany(friends, {
        foreignKey: 'user_id',
        as: 'friends'
      })
    }
  }
  users.init({
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    timestamps: false
  });
  return users;
};