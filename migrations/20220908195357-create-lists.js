'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lists', {

      list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      list_name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      list_arr: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      date_created: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lists');
  }
};