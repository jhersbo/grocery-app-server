'use strict';

const seed1 = [
  {
    column_title: "Groceries",
    items: [
      {
        id: "item-0-1662667624214",
        content: "item 0",
        notes: null
      },
      {
        id: "item-1-1662667624214",
        content: "item 1",
        notes: null
      },
      {
        id: "item-3-1662667624214",
        content: "item 3",
        notes: null
      },
      {
        id: "item-5-1662667624214",
        content: "item 5",
        notes: null
      },
      {
        id: "item-6-1662667624214",
        content: "item 6",
        notes: null
      },
      {
        id: "item-7-1662667624214",
        content: "item 7",
        notes: null
      },
      {
        id: "item-8-1662667624214",
        content: "item 8",
        notes: null
      },
      {
        id: "item-9-1662667624214",
        content: "item 9",
        notes: null
      }
    ]
  }, 
  {
    column_title: "Produce",
    items: [
      {
        id: "item-10-1662667624214",
        content: "item 10"
      },
      {
        id: "item-11-1662667624214",
        content: "item 11"
      },
      {
        id: "item-12-1662667624214",
        content: "item 12"
      },
      {
        id: "item-4-1662667624214",
        content: "item 4"
      },
      {
        id: "item-13-1662667624214",
        content: "item 13"
      },
      {
        id: "item-14-1662667624214",
        content: "item 14"
      }
    ]
  }
]



module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("lists", [
      {
        list_id: 23422,
        list_name: "My List",
        user_id: 2,
        list_arr: JSON.stringify(seed1),
        date_created: "1999-01-08 04:05:06 -8:00"

        
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lists", [])
  }
};
