'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('items', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model:{
          tableName: 'users',
          schema: 'public'
        },
        key: 'user_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('items', 'user_id', {})
  }
};
