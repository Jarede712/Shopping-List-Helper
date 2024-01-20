// import models
const Inventory = require('./Inventories');
const Category = require('./Categories');
const List = require('./List');
const User = require('./User');
const Userlist = require('./Userlist');


Inventory.belongsTo(Category, {
  foreignKey: 'category_id'
});


Category.hasMany(Inventory, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})


List.belongsTo(User, {
  foreignKey: 'user_id'
});


User.hasMany(List, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

// Products belongToMany Tags (through ProductTag)
List.belongsToMany(Inventory, {
  through: Userlist,
  foreignKey: 'list_id'
})

// Tags belongToMany Products (through ProductTag)
Inventory.belongsToMany(List, {
  through: Userlist,
  foreignKey: 'inventory_id'
})


module.exports = {
  Inventory,
  Category,
  List,
  User,
  Userlist,
};
