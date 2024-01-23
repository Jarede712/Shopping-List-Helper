const seedCategories = require('./categories-seeds');
const seedInventory = require('./inventories-seeds');
const seedList = require('./list-seeds');
const seedUser = require('./user-seeds');
const seedUserlist = require('./userlist-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedInventory();
  console.log('\n----- Invertories SEEDED -----\n');

  await seedUser();
  console.log('\n----- User SEEDED -----\n');

  await seedList();
  console.log('\n----- List SEEDED -----\n');

  await seedUserlist();
  console.log('\n----- User List SEEDED -----\n');

  process.exit(0);
};

seedAll();
