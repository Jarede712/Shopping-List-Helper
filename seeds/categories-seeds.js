const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'aaa',
  },
  {
    category_name: 'bbb',
  },
  {
    category_name: 'ccc',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
