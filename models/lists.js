'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      this.hasOne(users, {
        foreignKey: "user_id",
        as: "user"
      })
    }
  }
  lists.init({
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    list_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    list_arr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'lists',
    tableName: 'lists',
    timestamps: false
  });
  return lists;
};