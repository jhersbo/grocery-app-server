'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 0,
        name:'John Doe',
        username: 'johndoe',
        password: "1234",
      },
      {
        user_id: 1,
        name: 'Jane Doe',
        username: 'janedoe',
        password: "1234",
      },
      {
        user_id: 2,
        name: 'Bob Doe',
        username: 'bobdoe69',
        password: "1234",
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('users', null, {})
  }
};
