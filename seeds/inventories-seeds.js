const { Inventory } = require('../models');

const inventoryData = [
  {
    inventory_name: 'milk',
    category_id: 2,
  },
  {
    inventory_name: 'apples',
    category_id: 1,
  },
  {
    inventory_name: 'chicken',
    category_id: 3,
  },
  {
    inventory_name: 'flour',
    category_id: 4,
  },
  {
    inventory_name: 'paper towels',
    category_id: 5,
  },
  {
    inventory_name: 'beef',
    category_id: 3,
  },
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
