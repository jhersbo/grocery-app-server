'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        item_id: 0,
        item: '2% Milk',
        notes: null,
        user_id: 1
      },
      {
        item_id: 1,
        item: 'Thick Sugar Snaps',
        notes: null,
        user_id: 0
      },
      {
        item_id: 2,
        item: 'Granola',
        notes: null,
        user_id: 1
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {})
  }
};
