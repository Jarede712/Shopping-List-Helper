const { Inventory } = require('../models');

const inventoryData = [
  {
    inventory_name: 'aaa',
    category_id: 1,
  },
  {
    inventory_name: 'bbb',
    category_id: 1,
  },
  {
    inventory_name: 'ccc',
    category_id: 1,
  },
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
