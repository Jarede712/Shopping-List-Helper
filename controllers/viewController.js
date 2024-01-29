const User = require("../models/User");
const Userlist = require("../models/Userlist");
const Category = require("../models/Categories");
const Inventory = require("../models/Inventories");
const List = require("../models/List");

exports.getHomePage = (req, res) => {
  res.render("home", { logged_in: req.session.logged_in });
};

exports.getLoginPage = async (req, res) => {
  res.render("login", { logged_in: req.session.logged_in });
};

exports.getPantryPage = async (req, res) => {
  const userlist = await Userlist.findByPk(req.session.user_id);
  res.render("pantry", { userlist, logged_in: req.session.logged_in });
};

exports.getProfilePage = async (req, res) => {
  const user = await User.findByPk(req.session.user_id);
  res.render("profile", { user, logged_in: req.session.logged_in });
};

exports.getShoppingListPage = async (req, res) => {
  const inventory = await Inventory.findAll({
    where: { user_id: req.session.user_id },
  });
  res.render("shoppingList", { inventory, logged_in: req.session.logged_in });
};

exports.getCategoriesPage = async (req, res) => {
  const categories = await Category.findAll();
  res.render("categories", { categories, logged_in: req.session.logged_in });
};
