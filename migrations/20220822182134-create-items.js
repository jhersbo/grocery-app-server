'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      arr_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      item_arr: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};