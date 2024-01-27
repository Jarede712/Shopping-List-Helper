// import models

const Inventory = require('./Inventories');
const Categories = require('./Categories');
const List = require('./List');
const User = require('./User');
const Userlist = require('./Userlist');


Inventory.belongsTo(Categories, {
  foreignKey: 'category_id'
});


Categories.hasMany(Inventory, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
})


List.belongsTo(User, {
  foreignKey: 'user_id'
});


Userlist.belongsTo(List, {
  foreignKey: "list_id",
});


Inventory.hasMany(Userlist, {
  foreignKey: "inventory_id",
});


Userlist.belongsTo(Inventory, {
  foreignKey: "inventory_id",
});


List.belongsTo(User, {
  foreignKey: "user_id",
});


User.hasMany(List, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});


// List belongToMany Inventory (through ProductTag)
List.belongsToMany(Inventory, {
  through: Userlist,
  foreignKey: "list_id",
});

// Inventory belongToMany List (through ProductTag)
Inventory.belongsToMany(List, {
  through: Userlist,
  foreignKey: "inventory_id",
});

module.exports = {
  Inventory,
  Categories,
  List,
  User,
  Userlist,
};
