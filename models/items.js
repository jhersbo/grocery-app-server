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

      this.hasOne(users, {
        foreignKey: 'arr_id',
        as: "items"
      }) 
    }
  }
  items.init({
    arr_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //user id fk here
    item_arr: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'items',
    tableName: 'items',
    timestamps: false
  });
  return items;
};