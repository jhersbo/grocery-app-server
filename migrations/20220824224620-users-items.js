'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('users', 'items', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model:{
          tableName: 'items',
          schema: 'public'
        },
        key: 'arr_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('users', 'items', {})
  }
};
