'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      this.belongsTo(users, {
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  }
  items.init({
    item_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes:{
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'items',
    tableName: 'items',
    timestamps: false
  });
  return items;
};