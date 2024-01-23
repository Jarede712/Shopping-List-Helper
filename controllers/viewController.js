const User = require("../models/User");
const Userlist = require("../models/Userlist");
const Category = require("../models/Category");
const Inventory = require("../models/Inventory");
const List = require("../models/List");

exports.getHomePage = (req, res) => {
  // Fetch data if necessary, then render view
  res.render("index");
};

exports.getUserProfilePage = async (req, res) => {
  // Fetch user data, then render view
  const user = await User.findById(req.params.id);
  res.render("userProfile", { user });
};

exports.getUserlistPage = async (req, res) => {
  // Fetch userlist data, then render view
  const userlist = await Userlist.findById(req.params.id);
  res.render("userlist", { userlist });
};

exports.getCategoriesPage = async (req, res) => {
  // Fetch categories data, then render view
  const categories = await Category.find();
  res.render("categories", { categories });
};

exports.getInventoryPage = async (req, res) => {
  // Fetch inventory data, then render view
  const inventory = await Inventory.find();
  res.render("inventory", { inventory });
};

exports.getListPage = async (req, res) => {
  // Fetch list data, then render view
  const list = await List.findById(req.params.id);
  res.render("list", { list });
};
