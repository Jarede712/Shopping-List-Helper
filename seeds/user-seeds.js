const { User } = require('../models');

const userData = [
  {
    username: 'aaaa',
    email: 'aaaa',
  },
  {
    username: 'bbbb',
    email: 'bbbb',
  },
  {
    username: 'ccccc',
    email: 'cccc',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
