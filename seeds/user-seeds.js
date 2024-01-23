const { User } = require('../models');

const userData = [
  {
    username: 'aaaa',
    password: 'cccc',
    email: 'aaaa',
  },
  {
    username: 'bbbb',
    password: 'cccc',
    email: 'bbbb',
  },
  {
    username: 'ccccc',
    password: 'cccc',
    email: 'cccc',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
