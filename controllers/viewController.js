const User = require("../models/User");
const Userlist = require("../models/Userlist");
const Category = require("../models/Categories");
const Inventory = require("../models/Inventories");
const List = require("../models/List");


exports.getHomePage = (req, res) => {
  // Fetch data if necessary, then render view
  res.render("login");
};

exports.getUserProfilePage = async (req, res) => {
  // Fetch user data, then render view
  const user = await User.findByPk(req.params.id);
  res.render("user", { user });
};

exports.getUserlistPage = async (req, res) => {
  // Fetch userlist data, then render view
  const userlist = await Userlist.findByPk(req.params.id);
  res.render("userlist", { userlist });
};

exports.getCategoriesPage = async (req, res) => {
  // Fetch categories data, then render view
  const categories = await Category.findAll();
  res.render("categories", { categories });
};

exports.getInventoryPage = async (req, res) => {
  // Fetch inventory data, then render view
  const inventory = await Inventory.findAll();
  res.render("inventory", { inventory });
};

exports.getListPage = async (req, res) => {
  // Fetch list data, then render view
  const list = await List.findByPk(req.params.id);
  res.render("list", { list });
};