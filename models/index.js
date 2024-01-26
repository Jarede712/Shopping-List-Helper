// import models
<<<<<<< HEAD
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
=======
const Inventory = require("./Inventories");
const Category = require("./Categories");
const List = require("./List");
const User = require("./User");
const Userlist = require("./Userlist");

Inventory.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Inventory, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
>>>>>>> 089ddf66a427cc2b3882c5ec9969ee64155c1cd6
});

List.hasMany(Userlist, {
  foreignKey: "list_id",
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
