const { Userlist } = require('../models');

const userlistData = [
  {
    list_id: 1,
    inventory_id: 2,
  },
  {
    list_id: 1,
    inventory_id: 3,
  },
  {
    list_id: 1,
    inventory_id: 4,
  },
];

const seedUserlist = () => Userlist.bulkCreate(userlistData);

module.exports = seedUserlist;
