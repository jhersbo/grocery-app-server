'use strict';

const seed1 = [
  [
    {
      id: "item-0-1662667624214",
      content: "item 0"
    },
    {
      id: "item-1-1662667624214",
      content: "item 1"
    },
    {
      id: "item-3-1662667624214",
      content: "item 3"
    },
    {
      id: "item-5-1662667624214",
      content: "item 5"
    },
    {
      id: "item-6-1662667624214",
      content: "item 6"
    },
    {
      id: "item-7-1662667624214",
      content: "item 7"
    },
    {
      id: "item-8-1662667624214",
      content: "item 8"
    },
    {
      id: "item-9-1662667624214",
      content: "item 9"
    }
  ], 
  [
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
]

const seed2 = [
  [
    {
      "id": "item-0-1662667624214",
      "content": "item 0"
    },
    {
      "id": "item-1-1662667624214",
      "content": "item 1"
    },
    {
      "id": "item-3-1662667624214",
      "content": "item 3"
    },
    {
      "id": "item-5-1662667624214",
      "content": "item 5"
    },
    {
      "id": "item-6-1662667624214",
      "content": "item 6"
    },
    {
      "id": "item-7-1662667624214",
      "content": "item 7"
    },
    {
      "id": "item-8-1662667624214",
      "content": "item 8"
    },
    {
      "id": "item-9-1662667624214",
      "content": "item 9"
    }
  ], 
  [
    {
      "id": "item-10-1662667624214",
      "content": "item 10"
    },
    {
      "id": "item-11-1662667624214",
      "content": "item 11"
    },
    {
      "id": "item-12-1662667624214",
      "content": "item 12"
    },
    {
      "id": "item-4-1662667624214",
      "content": "item 4"
    },
    {
      "id": "item-13-1662667624214",
      "content": "item 13"
    },
    {
      "id": "item-14-1662667624214",
      "content": "item 14"
    }
  ]
]



module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("lists", [
      {
        list_id: 23422,
        list_arr: JSON.stringify(seed1),
        user_id: 2
      },
      {
        list_id: 232,
        list_arr: JSON.stringify(seed2),
        user_id: 1
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lists", [])
  }
};
