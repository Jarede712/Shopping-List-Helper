const { List } = require('../models');

const listData = [
  {
    user_id: 1,
  },
  {
    user_id: 1,
  },
  {
    user_id: 1,
  },
];

const seedList = () => List.bulkCreate(listData);

module.exports = seedList;
