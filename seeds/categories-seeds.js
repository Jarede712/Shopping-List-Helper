const { Categories } = require('../models');

const categoryData = [
  {
    category_name: 'produce',
  },
  {
    category_name: 'dairy',
  },
  {
    category_name: 'protein',
  },
  {
    category_name: 'dry',
  },
  {
    category_name: 'frozen',

  },
  {
    category_name: 'other',
  },
];

const seedCategories = () => Categories.bulkCreate(categoryData);

module.exports = seedCategories;
